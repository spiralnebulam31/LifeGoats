// import sendgrid from '@sendgrid/mail';

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// const recipients = [
//   { email: 'anastasiaadamoudi@gmail.com', name: 'John Doe', announcement: 'Our big sale starts tomorrow!' },
//   { email: 'anastasia@pie.co.de', name: 'Jane Smith', announcement: 'Check out our new product line!' },
// ];

// export async function GET() {
//   try {
//     // Send an email to each recipient
//     for (const recipient of recipients) {
//       const message = {
//         to: recipient.email,
//         from: 'info@lifegoats.com',
//         templateId: 'd-89359252dc324d05ba361fcb0ad7a860',
//         dynamicTemplateData: {
//           name: recipient.name,
//           announcement: recipient.announcement
//         }
//       };

//       await sendgrid.send(message);
//     }

//     return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Error sending emails:', error.response?.body || error);
//     return new Response(JSON.stringify({ error: 'Failed to send emails' }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }