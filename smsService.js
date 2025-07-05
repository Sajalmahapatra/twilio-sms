// smsService.js
const twilio = require('twilio');
require('dotenv').config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMS = async (to, message) => {
    console.log('Sending SMS to:', to);
console.log('From:', process.env.TWILIO_PHONE_NUMBER);
console.log('Message:', message);

  return await client.messages.create({
    body: `Dear Naik (Time Scale) AC Mahampatra, Pensioner ID: 206199700200. Your
identification is due on 05-Aug-2025. Please complete it to avoid stoppage
of pension. To submit your Life Certificate:1. Visit https://sparsh.defencepension.gov.in 2. Visit the nearest Pension Service Center. For assistance, contact your RO/SHQ or call 18001805325 during office hours 9:30 AM to 6:00 PM (Monday to Friday). **Please ignore if already done.** PCDA (Pensions)`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: to
  });
};

module.exports = sendSMS;
