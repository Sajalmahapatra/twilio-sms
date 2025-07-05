// app.js
const express = require('express');
const sendSMS = require('./smsService');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/send-sms', async (req, res) => {
  const { number, message } = req.body;

  if (!number || !message) {
    return res.status(400).json({ error: 'Both number and message are required.' });
  }

  try {
    const result = await sendSMS(number, message);
    res.json({ success: true, sid: result.sid });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
