import { ClassItem, EmailLogType, getActiveSubscribers, logEmailSend } from './db';

export interface SendClassEmailOptions {
  classItem: ClassItem;
  type: EmailLogType; // 'created' | 'updated' | 'postponed' | 'cancelled'
  siteUrl?: string;
}

// Format date in IST
export function formatDateIST(dateStr: string): string {
  try {
    const [y, m, d] = dateStr.split('-');
    const date = new Date(Number(y), Number(m) - 1, Number(d));
    return date.toLocaleDateString('ta-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

// Format 24h time to 12h IST string
export function formatTimeIST(timeStr: string): string {
  try {
    const [h, m] = timeStr.split(':');
    const hour = Number(h);
    const minute = m || '00';
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minute} ${ampm} (IST)`;
  } catch {
    return `${timeStr} (IST)`;
  }
}

// Generate HTML email according to Peace Buddy Brand Guidelines
export function generateClassEmailHtml(options: {
  classItem: ClassItem;
  type: EmailLogType;
  siteUrl: string;
  recipientEmail: string;
}): { subject: string; html: string; text: string } {
  const { classItem, type, siteUrl, recipientEmail } = options;
  const classesUrl = `${siteUrl}/classes`;
  const unsubscribeUrl = `${siteUrl}/unsubscribe?email=${encodeURIComponent(recipientEmail)}`;

  let subject = '';
  let headline = '';
  let badgeText = '';
  let badgeBg = '#7E6C9E';
  let friendlyIntro = '';
  let buttonLabel = 'Join Class / வகுப்பில் இணைக';
  let buttonUrl = classesUrl;

  const dateFormatted = formatDateIST(classItem.date);
  const timeFormatted = formatTimeIST(classItem.start_time);

  switch (type) {
    case 'created':
      subject = `[Peace Buddy] புதிய வகுப்பு அறிவிப்பு: ${classItem.name}`;
      headline = 'புதிய நேரலை வகுப்பு அறிவிப்பு';
      badgeText = 'NEW CLASS SCHEDULED';
      badgeBg = '#7E6C9E';
      friendlyIntro =
        'வணக்கம், அமைதியைத் தேடும் உங்கள் பயணத்திற்குத் துணையாக, Peace Buddy-ல் ஒரு புதிய நேரலை வகுப்பு திட்டமிடப்பட்டுள்ளது. உங்கள் மனதை ஒருமுகப்படுத்தி அமைதி காண வாருங்கள்.';
      buttonLabel = 'Join Class / வகுப்பில் இணைக';
      break;

    case 'updated':
      subject = `[Peace Buddy] வகுப்பு விவரங்கள் புதுப்பிக்கப்பட்டன: ${classItem.name}`;
      headline = 'வகுப்பு விவரங்கள் புதுப்பிப்பு';
      badgeText = 'CLASS DETAILS UPDATED';
      badgeBg = '#2A9D8F';
      friendlyIntro =
        'வணக்கம், உங்கள் வகுப்பின் நேரம் அல்லது இணைப்பு விவரங்கள் புதுப்பிக்கப்பட்டுள்ளன. புதிய விவரங்களை கீழே சரிபார்க்கவும்.';
      buttonLabel = 'Join Class / வகுப்பில் இணைக';
      break;

    case 'postponed':
      subject = `[Peace Buddy] வகுப்பு ஒத்திவைக்கப்பட்டுள்ளது: ${classItem.name}`;
      headline = 'வகுப்பு தேதி / நேரம் ஒத்திவைப்பு';
      badgeText = 'CLASS POSTPONED';
      badgeBg = '#D97706';
      friendlyIntro =
        'வணக்கம், தவிர்க்க முடியாத காரணத்தால் இந்த வகுப்பு புதிய தேதிக்கு ஒத்திவைக்கப்பட்டுள்ளது. உங்கள் அமைதியான நேரத்திற்கு ஏற்படும் தாமதத்திற்கு வருந்துகிறோம். புதிய நேரம் கீழே கொடுக்கப்பட்டுள்ளது.';
      buttonLabel = 'View Updated Schedule / புதிய அட்டவணை';
      break;

    case 'cancelled':
      subject = `[Peace Buddy] வகுப்பு ரத்து செய்யப்பட்டுள்ளது: ${classItem.name}`;
      headline = 'வகுப்பு ரத்து செய்யப்பட்டுள்ளது';
      badgeText = 'CLASS CANCELLED';
      badgeBg = '#E63946';
      friendlyIntro =
        'வணக்கம், ஒரு குறிப்பிட்ட காரணத்தினால் இந்த வகுப்பு ரத்து செய்யப்பட்டுள்ளது. உங்கள் நேரத்திற்கு மதிப்பளித்து, பிற வகுப்புகளைப் பார்வையிட உங்களை அன்புடன் அழைக்கிறோம்.';
      buttonLabel = 'View Other Classes / பிற வகுப்புகளைக் காண்க';
      break;

    case 'reminder':
      subject = `[Peace Buddy] 1 மணி நேரத்தில் வகுப்பு தொடங்குகிறது: ${classItem.name}`;
      headline = 'வகுப்பு நினைவூட்டல் (1 Hour Reminder)';
      badgeText = 'STARTING SOON';
      badgeBg = '#7E6C9E';
      friendlyIntro =
        'வணக்கம், இன்னும் 1 மணி நேரத்தில் நமது நேரலை வகுப்பு தொடங்கவுள்ளது. உங்கள் தனிமையான, அமைதியான இடத்தில் அமர்ந்து வகுப்பில் இணைய தயாராகுங்கள்.';
      buttonLabel = 'Join Class / வகுப்பில் இணைக';
      break;
  }

  // HTML Email Template
  const html = `
<!DOCTYPE html>
<html lang="ta">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body { margin: 0; padding: 0; background-color: #FDFBFE; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans Tamil', Helvetica, Arial, sans-serif; color: #2D2342; line-height: 1.6; }
    .container { max-width: 600px; margin: 30px auto; background-color: #FFFFFF; border-radius: 24px; border: 1px solid #E8DFEF; overflow: hidden; box-shadow: 0 4px 20px rgba(126, 108, 158, 0.08); }
    .header { background: linear-gradient(135deg, #2D1B36 0%, #1A0B22 100%); padding: 36px 30px; text-align: center; color: #FFFFFF; }
    .brand-title { font-size: 24px; font-weight: 300; letter-spacing: 0.1em; color: #FFE3A8; margin: 0 0 6px 0; }
    .brand-sub { font-size: 13px; color: #E8DFEF; margin: 0; }
    .content { padding: 36px 32px; }
    .badge { display: inline-block; padding: 5px 14px; border-radius: 9999px; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; color: #FFFFFF; background-color: ${badgeBg}; margin-bottom: 18px; }
    .title { font-size: 22px; font-weight: 600; color: #2D2342; margin: 0 0 14px 0; line-height: 1.35; }
    .intro { font-size: 15px; color: #5A4D6E; margin-bottom: 24px; line-height: 1.7; }
    .details-box { background-color: #FBF8FC; border: 1px solid #E8DFEF; border-radius: 16px; padding: 22px; margin-bottom: 28px; }
    .detail-row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px; }
    .detail-label { color: #7A6E91; font-weight: 500; }
    .detail-value { color: #2D2342; font-weight: 600; text-align: right; }
    .strikethrough { text-decoration: line-through; color: #A398B8; margin-right: 8px; }
    .highlight-time { color: #D97706; font-weight: 700; }
    .reason-box { background-color: #FFF9EE; border-left: 4px solid #D97706; padding: 12px 16px; border-radius: 8px; margin: 16px 0; font-size: 13px; color: #78350F; }
    .btn-wrapper { text-align: center; margin: 32px 0 20px 0; }
    .btn { display: inline-block; background-color: #7E6C9E; color: #FFFFFF !important; text-decoration: none; padding: 14px 36px; border-radius: 9999px; font-size: 15px; font-weight: 600; letter-spacing: 0.02em; box-shadow: 0 4px 12px rgba(126, 108, 158, 0.35); }
    .alt-link { font-size: 12px; color: #7A6E91; text-align: center; margin-top: 12px; word-break: break-all; }
    .alt-link a { color: #7E6C9E; text-decoration: underline; }
    .footer { background-color: #FAF7FB; border-top: 1px solid #E8DFEF; padding: 24px 30px; text-align: center; font-size: 12px; color: #7A6E91; line-height: 1.6; }
    .footer a { color: #7E6C9E; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="brand-title">✦ PEACE BUDDY TAMIL ✦</div>
      <div class="brand-sub">மன அமைதி மற்றும் விழிப்புணர்வு தளம்</div>
    </div>

    <div class="content">
      <div class="badge">${badgeText}</div>
      <h1 class="title">${headline}</h1>
      <p class="intro">${friendlyIntro}</p>

      <div class="details-box">
        <div class="detail-row">
          <span class="detail-label">வகுப்பு (Class):</span>
          <span class="detail-value">${classItem.name}</span>
        </div>

        ${
          type === 'postponed' && classItem.original_date
            ? `
        <div class="detail-row">
          <span class="detail-label">தேதி (Date):</span>
          <span class="detail-value">
            <span class="strikethrough">${formatDateIST(classItem.original_date)}</span>
            <span class="highlight-time">${dateFormatted}</span>
          </span>
        </div>
        <div class="detail-row">
          <span class="detail-label">நேரம் (Time):</span>
          <span class="detail-value">
            <span class="strikethrough">${formatTimeIST(classItem.original_time || '')}</span>
            <span class="highlight-time">${timeFormatted}</span>
          </span>
        </div>
        `
            : `
        <div class="detail-row">
          <span class="detail-label">தேதி (Date):</span>
          <span class="detail-value">${dateFormatted}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">நேரம் (Time):</span>
          <span class="detail-value">${timeFormatted}</span>
        </div>
        `
        }

        <div class="detail-row">
          <span class="detail-label">கால அளவு (Duration):</span>
          <span class="detail-value">${classItem.duration_minutes} நிமிடங்கள்</span>
        </div>

        <div class="detail-row">
          <span class="detail-label">நேர வலயம் (Timezone):</span>
          <span class="detail-value">IST (Asia/Kolkata)</span>
        </div>

        ${
          type === 'postponed' && classItem.postpone_reason
            ? `<div class="reason-box"><strong>ஒத்திவைப்புக்கான காரணம்:</strong> ${classItem.postpone_reason}</div>`
            : ''
        }

        ${
          type === 'cancelled' && classItem.cancel_reason
            ? `<div class="reason-box"><strong>ரத்துக்கான காரணம்:</strong> ${classItem.cancel_reason}</div>`
            : ''
        }
      </div>

      <div class="btn-wrapper">
        <a href="${buttonUrl}" class="btn">${buttonLabel}</a>
      </div>

      <div class="alt-link">
        Or open this link: <a href="${classesUrl}">${classesUrl}</a>
      </div>

      <p style="font-size: 12px; color: #7A6E91; text-align: center; margin-top: 20px;">
        <em>குறிப்பு: இணையதளத்தில் உள்நுழைந்த (Login) பிறகு வகுப்பில் இணையலாம். நேரலை வகுப்பு தொடங்குவதற்கு 10 நிமிடங்களுக்கு முன்பு Join Class பொத்தான் இயக்கப்படும்.</em>
      </p>
    </div>

    <div class="footer">
      <p>© 2026 Peace Buddy Tamil. அமைதியான மனம். தெளிவான வாழ்வு.<br>
      இந்த மின்னஞ்சல் Peace Buddy வகுப்பு அட்டவணைக்காக அனுப்பப்பட்டது.</p>
      <p><a href="${unsubscribeUrl}">Unsubscribe / மின்னஞ்சல் பெற விரும்பவில்லை</a></p>
    </div>
  </div>
</body>
</html>
  `;

  const text = `
Peace Buddy Tamil - ${subject}

${headline}
${friendlyIntro}

வகுப்பு: ${classItem.name}
தேதி: ${dateFormatted}
நேரம்: ${timeFormatted}
கால அளவு: ${classItem.duration_minutes} நிமிடங்கள் (IST)

வகுப்பில் இணைய எங்கள் இணையதளத்திற்குச் செல்லவும்:
${classesUrl}

Unsubscribe: ${unsubscribeUrl}
  `.trim();

  return { subject, html, text };
}

// Send automated class notifications to all subscribers
export async function sendClassNotification(options: SendClassEmailOptions): Promise<{
  success: boolean;
  totalRecipients: number;
  sentCount: number;
  failedCount: number;
}> {
  const { classItem, type } = options;
  const siteUrl = options.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const recipients = await getActiveSubscribers();
  if (recipients.length === 0) {
    return { success: true, totalRecipients: 0, sentCount: 0, failedCount: 0 };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const brevoApiKey = process.env.BREVO_API_KEY;
  const fromEmail = process.env.EMAIL_FROM || 'Peace Buddy Tamil <notifications@peacebuddytamil.com>';

  let sentCount = 0;
  let failedCount = 0;

  // Process in batches of 10 to respect rate limits
  const BATCH_SIZE = 10;
  for (let i = 0; i < recipients.length; i += BATCH_SIZE) {
    const batch = recipients.slice(i, i + BATCH_SIZE);

    await Promise.all(
      batch.map(async (recipient) => {
        const { subject, html, text } = generateClassEmailHtml({
          classItem,
          type,
          siteUrl,
          recipientEmail: recipient,
        });

        try {
          if (resendApiKey) {
            // Send via Resend API
            const res = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                from: fromEmail,
                to: recipient,
                subject,
                html,
                text,
              }),
            });

            if (!res.ok) {
              const errText = await res.text();
              throw new Error(`Resend API error: ${errText}`);
            }
          } else if (brevoApiKey) {
            // Send via Brevo API
            const res = await fetch('https://api.brevo.com/v3/smtp/email', {
              method: 'POST',
              headers: {
                'api-key': brevoApiKey,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                sender: { name: 'Peace Buddy Tamil', email: fromEmail },
                to: [{ email: recipient }],
                subject,
                htmlContent: html,
                textContent: text,
              }),
            });

            if (!res.ok) {
              const errText = await res.text();
              throw new Error(`Brevo API error: ${errText}`);
            }
          } else {
            // Simulated local development send
            console.log(`[Email Simulation] Sent "${subject}" to ${recipient}`);
          }

          await logEmailSend({
            class_id: classItem.id,
            class_name: classItem.name,
            recipient_email: recipient,
            type,
            status: 'sent',
          });
          sentCount++;
        } catch (err: any) {
          console.error(`Failed to send email to ${recipient}:`, err.message);
          await logEmailSend({
            class_id: classItem.id,
            class_name: classItem.name,
            recipient_email: recipient,
            type,
            status: 'failed',
            error_message: err.message || 'Unknown send error',
          });
          failedCount++;
        }
      })
    );

    // Small delay between batches
    if (i + BATCH_SIZE < recipients.length) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  return {
    success: failedCount === 0,
    totalRecipients: recipients.length,
    sentCount,
    failedCount,
  };
}
