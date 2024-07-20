const accountSid = 'replace your twilio account ID';
const authToken = 'replace your twilio authentication token';
const client = require('twilio')(accountSid, authToken);

const recipientNumber = '+91-Your mobile number';
const message = `Dear [Recipient's Name],

We are pleased to inform you that generous donations have been made to support your household. You are eligible to receive the following items from the ration shop:

[DONATED ITEMS]

We encourage you to visit the nearest ration shop and avail yourself of these essential items at your convenience. Your well-being is important to us, and we hope that these provisions will provide some relief during these challenging times.

If you have any questions or need assistance, please feel free to reach out to us.

Warm regards,
[Your Organization Name]`;

// Number of times to send the message
const numberOfTimes = 3;

for (let i = 0; i < numberOfTimes; i++) {
    client.messages
      .create({
         body: message,
         from: '// Replace with your Twilio phone number',
         to: recipientNumber
       })
      .then(message => console.log(`SMS sent to ${recipientNumber}: ${message.sid}`))
      .catch(error => console.error(`Error sending SMS: ${error.message}`));
}
