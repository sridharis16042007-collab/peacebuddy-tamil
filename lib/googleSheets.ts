import { ClassItem, UserItem, getSettings } from './db';

const DEFAULT_WEBHOOK_URL =
  process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
  'https://script.google.com/macros/s/AKfycbzCRDSvt56PAXknih3RtgNL4JMH1fuKtZ4G6vUSUDHI_xz4Bz7UmbCHZgGGkMfMWynl9A/exec';

export async function getGoogleSheetsWebhookUrl(): Promise<string> {
  try {
    const settings = await getSettings();
    return settings.google_sheets_url || process.env.GOOGLE_SHEETS_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;
  } catch {
    return process.env.GOOGLE_SHEETS_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;
  }
}

interface WebhookResponse {
  success: boolean;
  message?: string;
  error?: string;
  count?: number;
}

async function postToGoogleSheets(payload: any): Promise<WebhookResponse> {
  const url = await getGoogleSheetsWebhookUrl();
  if (!url) {
    return { success: false, error: 'Google Sheets Webhook URL is not configured' };
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    const text = await res.text();
    try {
      const json = JSON.parse(text);
      return json;
    } catch {
      // If HTML was returned, check if it's an Apps Script error
      if (text.includes('Script function not found') || text.includes('Exception:')) {
        return {
          success: false,
          error: 'Google Apps Script Error: Please ensure you pasted the doPost script into Google Apps Script and saved/deployed it.',
        };
      }
      return { success: res.ok, message: text.substring(0, 200) };
    }
  } catch (err: any) {
    console.error('Google Sheets Webhook Network Error:', err);
    return { success: false, error: err.message || 'Network request failed' };
  }
}

/**
 * Send an email for free via Google Apps Script MailApp
 */
export async function sendEmailViaGoogleSheets(options: {
  to: string;
  subject: string;
  html: string;
  text?: string;
  class_name?: string;
  type?: string;
}): Promise<WebhookResponse> {
  return await postToGoogleSheets({
    action: 'send_email',
    to: options.to,
    subject: options.subject,
    html: options.html,
    text: options.text,
    class_name: options.class_name,
    type: options.type,
  });
}

/**
 * Sync single customer to Google Sheets
 */
export async function syncCustomerToGoogleSheets(customer: UserItem): Promise<WebhookResponse> {
  return await postToGoogleSheets({
    action: 'sync_customer',
    customer: {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone || '',
      is_paid: Boolean(customer.is_paid),
      payment_status: customer.payment_status || (customer.is_paid ? 'paid' : 'unpaid'),
      created_at: customer.created_at,
      last_login_at: customer.last_login_at || 'Never',
      role: customer.role || 'customer',
      notes: customer.notes || '',
    },
  });
}

/**
 * Bulk sync all customers to Google Sheets
 */
export async function syncAllCustomersToGoogleSheets(customers: UserItem[]): Promise<WebhookResponse> {
  const mapped = customers.map((c) => ({
    id: c.id,
    name: c.name,
    email: c.email,
    phone: c.phone || '',
    is_paid: Boolean(c.is_paid),
    payment_status: c.payment_status || (c.is_paid ? 'paid' : 'unpaid'),
    created_at: c.created_at,
    last_login_at: c.last_login_at || 'Never',
    role: c.role || 'customer',
    notes: c.notes || '',
  }));

  return await postToGoogleSheets({
    action: 'sync_all_customers',
    customers: mapped,
  });
}

/**
 * Sync single class schedule to Google Sheets
 */
export async function syncClassToGoogleSheets(classItem: ClassItem): Promise<WebhookResponse> {
  return await postToGoogleSheets({
    action: 'sync_class',
    classItem,
  });
}

/**
 * Bulk sync all classes to Google Sheets
 */
export async function syncAllClassesToGoogleSheets(classes: ClassItem[]): Promise<WebhookResponse> {
  return await postToGoogleSheets({
    action: 'sync_all_classes',
    classes,
  });
}

/**
 * Send test verification email through Google Apps Script
 */
export async function testGoogleSheetsWebhook(toEmail?: string): Promise<WebhookResponse> {
  return await postToGoogleSheets({
    action: 'test',
    to: toEmail,
  });
}
