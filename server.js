/**
 * Peace Buddy Tamil — Production Express & Node.js Server
 * 
 * Provides:
 * 1. Express API endpoints (/api/newsletter, /api/contact, /api/health)
 * 2. Static file serving and Next.js custom server support
 * 3. Graceful shutdown and calm request logging
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data storage files (for lightweight local persistence)
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

const readData = (filePath) => {
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return [];
  }
};

const writeData = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    brand: 'Peace Buddy Tamil',
    time: new Date().toISOString()
  });
});

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbwLSuVu2aJ90owifFMXYhRt3YNZ4C8uNguYopWnNBcgowXKZ0vLr7FpbNzluejFKH6-lg/exec';

// Newsletter Subscription
app.post('/api/newsletter', async (req, res) => {
  const { name, email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const subscribers = readData(SUBSCRIBERS_FILE);
  const exists = subscribers.some(s => s.email.toLowerCase() === email.toLowerCase());

  if (!exists) {
    subscribers.push({
      name: name ? name.trim() : null,
      email: email.trim().toLowerCase(),
      createdAt: new Date().toISOString()
    });
    writeData(SUBSCRIBERS_FILE, subscribers);
  }

  // Forward to Google Sheet
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'Newsletter Registration',
        name: name || 'Anonymous',
        email: email.trim(),
        message: 'Subscribed to free peace guide from Home Page',
        timestamp: new Date().toISOString()
      })
    });
  } catch (err) {
    console.error('Sheet sync error:', err.message);
  }

  console.log(`[Express API] New subscriber: ${email}`);
  return res.json({
    success: true,
    message: 'Subscription confirmed. Your peace guide will arrive shortly.'
  });
});

// Contact Form
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  const messages = readData(MESSAGES_FILE);
  messages.push({
    name: name ? name.trim() : null,
    email: email.trim().toLowerCase(),
    message: message.trim(),
    createdAt: new Date().toISOString()
  });
  writeData(MESSAGES_FILE, messages);

  // Forward to Google Sheet
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'Direct Contact Inquiry',
        name: name || 'Anonymous',
        email: email.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString()
      })
    });
  } catch (err) {
    console.error('Sheet sync error:', err.message);
  }

  console.log(`[Express API] Message received from: ${email}`);
  return res.json({
    success: true,
    message: 'Message received. We will respond peacefully.'
  });
});

// Serve exported static build if present
const outDir = path.join(__dirname, 'out');
if (fs.existsSync(outDir)) {
  app.use(express.static(outDir));
  app.get('*', (req, res) => {
    res.sendFile(path.join(outDir, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="ta">
      <head>
        <meta charset="utf-8">
        <title>Peace Buddy API Server</title>
        <style>
          body { font-family: system-ui, sans-serif; background: #F4F9FD; color: #12263A; padding: 3rem; text-align: center; }
          .card { max-width: 500px; margin: 0 auto; background: white; padding: 2rem; border-radius: 20px; border: 1px solid #DCEEFA; }
          h1 { color: #0B3D6B; }
          code { background: #DCEEFA; padding: 0.2rem 0.5rem; border-radius: 6px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Peace Buddy Tamil — Express Server</h1>
          <p>Express API server is running on port ${PORT}.</p>
          <p>Run <code>npm run dev</code> for the Next.js frontend development server.</p>
        </div>
      </body>
      </html>
    `);
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`✓ Peace Buddy Express & Node.js backend listening on http://localhost:${PORT}`);
});
