/**
 * =====================================================================
 * PEACE BUDDY TAMIL — GOOGLE SHEETS & FREE EMAIL WEBHOOK SCRIPT
 * =====================================================================
 * Instructions:
 * 1. Open your Google Spreadsheet: https://sheets.google.com
 * 2. Click: Extensions > Apps Script
 * 3. Delete any default code in Code.gs and PASTE ALL OF THIS CODE.
 * 4. Click the Save icon (💾).
 * 5. Click "Deploy" > "Manage deployments" > Edit (or "New deployment")
 *    - Type: Web app
 *    - Description: Peace Buddy Webhook
 *    - Execute as: Me (your Google email)
 *    - Who has access: Anyone
 * 6. Click "Deploy" (Grant permissions if prompted by Google).
 * 7. Your Web App URL will remain:
 *    https://script.google.com/macros/s/AKfycbzCRDSvt56PAXknih3RtgNL4JMH1fuKtZ4G6vUSUDHI_xz4Bz7UmbCHZgGGkMfMWynl9A/exec
 * =====================================================================
 */

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    message: "Peace Buddy Tamil Google Sheets & Free Email Service is ACTIVE!",
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 30 seconds for concurrent requests
  try {
    lock.waitLock(30000);
  } catch (lockErr) {
    return createJsonResponse({ success: false, error: "Server busy, please retry: " + lockErr.toString() });
  }

  try {
    var raw = e && e.postData ? e.postData.contents : "";
    var data = {};
    if (raw) {
      try {
        data = JSON.parse(raw);
      } catch (pErr) {
        data = { error: "JSON parse failed", raw: raw };
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var action = data.action || "";

    // -------------------------------------------------------------
    // 1. SEND FREE EMAIL VIA GOOGLE APPS SCRIPT (MailApp / Gmail)
    // -------------------------------------------------------------
    if (action === "send_email" || action === "email") {
      var recipient = data.to || data.recipient_email;
      var subject = data.subject || "✦ Peace Buddy Tamil Notification";
      var html = data.html || data.htmlContent || "";
      var text = data.text || "Please open this email in a modern email client.";

      if (!recipient) {
        return createJsonResponse({ success: false, error: "Missing recipient email" });
      }

      // Send 100% free email using Google account quota
      MailApp.sendEmail({
        to: recipient,
        subject: subject,
        htmlBody: html,
        body: text,
        name: "Peace Buddy Tamil"
      });

      // Log into "EmailLogs" sheet
      logEmailToSheet(ss, {
        recipient: recipient,
        className: data.class_name || "General Notification",
        type: data.type || "notification",
        status: "sent",
        subject: subject
      });

      return createJsonResponse({
        success: true,
        message: "Email sent successfully via Google Apps Script MailApp to " + recipient
      });
    }

    // -------------------------------------------------------------
    // 2. SYNC SINGLE CUSTOMER (Registration, Login, or Payment Change)
    // -------------------------------------------------------------
    if (action === "sync_customer") {
      syncCustomerRow(ss, data.customer);
      return createJsonResponse({ success: true, message: "Customer synced successfully" });
    }

    // -------------------------------------------------------------
    // 3. BULK SYNC ALL CUSTOMERS
    // -------------------------------------------------------------
    if (action === "sync_all_customers") {
      var customers = data.customers || [];
      for (var i = 0; i < customers.length; i++) {
        syncCustomerRow(ss, customers[i]);
      }
      return createJsonResponse({
        success: true,
        count: customers.length,
        message: customers.length + " customers synced to sheet"
      });
    }

    // -------------------------------------------------------------
    // 4. SYNC CLASS SCHEDULE (Created, Updated, Postponed, Cancelled)
    // -------------------------------------------------------------
    if (action === "sync_class") {
      syncClassRow(ss, data.classItem);
      return createJsonResponse({ success: true, message: "Class synced successfully" });
    }

    // -------------------------------------------------------------
    // 5. BULK SYNC ALL CLASSES
    // -------------------------------------------------------------
    if (action === "sync_all_classes") {
      var classesList = data.classes || [];
      for (var j = 0; j < classesList.length; j++) {
        syncClassRow(ss, classesList[j]);
      }
      return createJsonResponse({
        success: true,
        count: classesList.length,
        message: classesList.length + " classes synced to sheet"
      });
    }

    // -------------------------------------------------------------
    // 6. TEST CONNECTION & SEND VERIFICATION EMAIL
    // -------------------------------------------------------------
    if (action === "test") {
      var testTo = data.to || Session.getActiveUser().getEmail();
      if (testTo) {
        MailApp.sendEmail({
          to: testTo,
          subject: "✦ [Peace Buddy] Google Sheets Free Email Test",
          htmlBody: "<div style='font-family:sans-serif;padding:24px;color:#2D2342;background:#FDFBFE;border-radius:12px;border:1px solid #E8DFEF;max-width:600px;margin:0 auto;'>" +
            "<h2 style='color:#7E6C9E;margin-top:0;'>✦ Google Sheets Free Email Connected!</h2>" +
            "<p>வணக்கம்! உங்கள் Peace Buddy Tamil இணையதளம் Google Sheets மற்றும் இலவச மின்னஞ்சல் சேவையுடன் வெற்றிகரமாக இணைக்கப்பட்டுள்ளது.</p>" +
            "<p>இனி உங்கள் வகுப்புகளின் அறிவிப்புகள் மற்றும் பதிவு செய்யும் பயனர்களுக்கான மின்னஞ்சல்கள் அனைத்தும் உங்கள் கூகிள் கணக்கு மூலம் <strong>முற்றிலும் இலவசமாக (100% Free)</strong> அனுப்பப்படும்.</p>" +
            "<hr style='border:none;border-top:1px solid #E8DFEF;margin:20px 0;'/>" +
            "<p style='color:#7E6C9E;font-size:12px;margin:0;'>Peace Buddy Tamil • அமைதியான மனம் • தெளிவான வாழ்வு</p>" +
            "</div>",
          name: "Peace Buddy Tamil"
        });
      }

      return createJsonResponse({
        success: true,
        message: "Google Sheets Webhook is active and test email sent to " + testTo
      });
    }

    return createJsonResponse({ success: false, error: "Unknown action: " + action });

  } catch (err) {
    return createJsonResponse({ success: false, error: err.toString() });
  } finally {
    lock.releaseLock();
  }
}

// =====================================================================
// HELPER FUNCTIONS FOR GOOGLE SHEETS
// =====================================================================

function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getISTString() {
  return Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss") + " IST";
}

function getOrCreateSheet(ss, sheetName, headers, headerBg) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(headers);
    var range = sheet.getRange(1, 1, 1, headers.length);
    range.setBackground(headerBg || "#1C1628");
    range.setFontColor("#FFFFFF");
    range.setFontWeight("bold");
    range.setFontSize(11);
    sheet.setFrozenRows(1);
    for (var c = 1; c <= headers.length; c++) {
      sheet.autoResizeColumn(c);
    }
  }
  return sheet;
}

// Sync Customer Row in "Customers" sheet
function syncCustomerRow(ss, customer) {
  if (!customer || !customer.email) return;

  var headers = [
    "User ID",
    "Customer Name",
    "Customer Email",
    "Phone",
    "Payment Status (PAID / UNPAID)",
    "Is Paid",
    "Registered Date",
    "Last Active / Login",
    "Role",
    "Admin Notes",
    "Last Synced (IST)"
  ];

  var sheet = getOrCreateSheet(ss, "Customers", headers, "#2D2342");
  var email = String(customer.email).toLowerCase().trim();
  var isPaid = Boolean(customer.is_paid || customer.payment_status === "paid");
  var paymentStatusText = isPaid ? "PAID" : "UNPAID";

  var rowData = [
    customer.id || "",
    customer.name || "",
    email,
    customer.phone || "",
    paymentStatusText,
    isPaid ? "TRUE" : "FALSE",
    customer.created_at || getISTString(),
    customer.last_login_at || "Never",
    customer.role || "customer",
    customer.notes || "",
    getISTString()
  ];

  var lastRow = sheet.getLastRow();
  var foundRow = -1;

  if (lastRow > 1) {
    var emailValues = sheet.getRange(2, 3, lastRow - 1, 1).getValues();
    for (var r = 0; r < emailValues.length; r++) {
      if (String(emailValues[r][0]).toLowerCase().trim() === email) {
        foundRow = r + 2;
        break;
      }
    }
  }

  var targetRow = foundRow > 0 ? foundRow : lastRow + 1;
  sheet.getRange(targetRow, 1, 1, rowData.length).setValues([rowData]);

  // Style the Payment Status cell (Column 5)
  var statusCell = sheet.getRange(targetRow, 5);
  if (isPaid) {
    statusCell.setBackground("#D1E7DD"); // Calming soft green
    statusCell.setFontColor("#0F5132");
    statusCell.setFontWeight("bold");
  } else {
    statusCell.setBackground("#F8D7DA"); // Soft warning red
    statusCell.setFontColor("#842029");
    statusCell.setFontWeight("bold");
  }

  // Adjust column widths if newly appended
  if (foundRow === -1 && targetRow <= 5) {
    for (var c = 1; c <= headers.length; c++) {
      sheet.autoResizeColumn(c);
    }
  }
}

// Sync Class Row in "Classes" sheet
function syncClassRow(ss, classItem) {
  if (!classItem || !classItem.id) return;

  var headers = [
    "Class ID",
    "Class Name",
    "Date (IST)",
    "Start Time (IST)",
    "Duration (Mins)",
    "Status",
    "Google Meet Link",
    "Postpone Reason",
    "Cancel Reason",
    "Last Updated (IST)"
  ];

  var sheet = getOrCreateSheet(ss, "Classes", headers, "#3A2B5C");
  var classId = String(classItem.id);

  var rowData = [
    classId,
    classItem.name || "",
    classItem.date || "",
    classItem.start_time || "",
    classItem.duration_minutes || 45,
    (classItem.status || "scheduled").toUpperCase(),
    classItem.meet_link || "",
    classItem.postpone_reason || "",
    classItem.cancel_reason || "",
    getISTString()
  ];

  var lastRow = sheet.getLastRow();
  var foundRow = -1;

  if (lastRow > 1) {
    var idValues = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
    for (var r = 0; r < idValues.length; r++) {
      if (String(idValues[r][0]) === classId) {
        foundRow = r + 2;
        break;
      }
    }
  }

  var targetRow = foundRow > 0 ? foundRow : lastRow + 1;
  sheet.getRange(targetRow, 1, 1, rowData.length).setValues([rowData]);

  // Style status cell (Column 6)
  var statusCell = sheet.getRange(targetRow, 6);
  var statusUpper = (classItem.status || "scheduled").toUpperCase();
  if (statusUpper === "SCHEDULED") {
    statusCell.setBackground("#D1E7DD");
    statusCell.setFontColor("#0F5132");
    statusCell.setFontWeight("bold");
  } else if (statusUpper === "POSTPONED") {
    statusCell.setBackground("#FFF3CD");
    statusCell.setFontColor("#664D03");
    statusCell.setFontWeight("bold");
  } else if (statusUpper === "CANCELLED") {
    statusCell.setBackground("#F8D7DA");
    statusCell.setFontColor("#842029");
    statusCell.setFontWeight("bold");
  }
}

// Log email dispatch into "EmailLogs" sheet
function logEmailToSheet(ss, logItem) {
  var headers = [
    "Timestamp (IST)",
    "Recipient Email",
    "Class Name",
    "Notification Type",
    "Delivery Status",
    "Email Subject"
  ];

  var sheet = getOrCreateSheet(ss, "EmailLogs", headers, "#1E0E27");
  sheet.appendRow([
    getISTString(),
    logItem.recipient || "",
    logItem.className || "",
    logItem.type || "",
    (logItem.status || "sent").toUpperCase(),
    logItem.subject || ""
  ]);
}
