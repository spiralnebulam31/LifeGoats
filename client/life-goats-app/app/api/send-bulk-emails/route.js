import sendgrid from '@sendgrid/mail';
import fs from 'fs';
import path from 'path';
import juice from 'juice';
import fetch from 'node-fetch';  // Use node-fetch to fetch the CSS file from URL
import { recipientsWithZoom, recipientsWithoutZoom } from './recipients.js';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function fetchExternalCSS(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch CSS from ${url}`);
  }
  return await response.text(); // Return the CSS as a string
}

export async function GET() {
  try {
    // Load the personalized message templates
    const personalizedTemplatePath = path.join(process.cwd(), 'app/api/send-bulk-emails/personalized-message-template.html');
    const personalizedTemplate = fs.readFileSync(personalizedTemplatePath, 'utf-8');
    const personalizedZoomTemplatePath = path.join(process.cwd(), 'app/api/send-bulk-emails/zoom-message-template.html');
    const personalizedZoomTemplate = fs.readFileSync(personalizedZoomTemplatePath, 'utf-8');
    
    // Load the newsletter template
    const newsletterTemplatePath = path.join(process.cwd(), 'app/api/send-bulk-emails/newsletter-template.html');
    const newsletterTemplate = fs.readFileSync(newsletterTemplatePath, 'utf-8');

    // External CSS file URL
    const cssFileUrl = 'https://www.lifagoats.com/styles/newsletter-styles.css';

    // Fetch and inject the external CSS into the HTML
    const cssContent = await fetchExternalCSS(cssFileUrl);

    // Send an email to each recipient without Zoom link
    for (const recipient of recipientsWithoutZoom) {
      // Replace placeholders in the personalized message template
      let personalizedHtml = personalizedTemplate
        .replace('{{name}}', recipient.name)
        .replace('{{personalizedMessage}}', recipient.personalizedMessage)
        .replace('{{signOff}}', recipient.signOff)
        .replace('{{signature}}', recipient.signature);

      // Combine the personalized message with the newsletter template
      let finalHtml = personalizedHtml + newsletterTemplate;

      // Inject the CSS content into the HTML
      finalHtml = `<style>${cssContent}</style>` + finalHtml;

      // Inline CSS for the newsletter template using juice
      const inlinedHtml = juice(finalHtml); // Use juice to inline the CSS

      // Log the final inlined HTML for debugging
      console.log('Final inlined HTML for', recipient.name, ':', inlinedHtml);

      // Send the email with the combined inlined HTML
      const message = {
        to: recipient.email,
        from: 'info@lifegoats.com', // Verified sender in SendGrid
        subject: 'Life Goats - December 2024 Newsletter',
        html: inlinedHtml,  // Send the final combined inlined HTML
      };

      await sendgrid.send(message);
    }

    // Send an email to each recipient with Zoom link
    for (const recipient of recipientsWithZoom) {
      // Replace placeholders in the personalized message template
      let personalizedHtml = personalizedZoomTemplate
        .replace('{{name}}', recipient.name)
        .replace('{{personalizedMessage}}', recipient.personalizedMessage)
        .replace('{{signOff}}', recipient.signOff)
        .replace('{{signature}}', recipient.signature);

      // Combine the personalized message with the newsletter template
      let finalHtml = personalizedHtml + newsletterTemplate;

      // Inject the CSS content into the HTML
      finalHtml = `<style>${cssContent}</style>` + finalHtml;

      // Inline CSS for the newsletter template using juice
      const inlinedHtml = juice(finalHtml); // Use juice to inline the CSS

      // Log the final inlined HTML for debugging
      console.log('Final inlined HTML for', recipient.name, ':', inlinedHtml);

      // Send the email with the combined inlined HTML
      const message = {
        to: recipient.email,
        from: 'info@lifegoats.com', // Verified sender in SendGrid
        subject: 'Life Goats - December 2024 Newsletter',
        html: inlinedHtml,  // Send the final combined inlined HTML
      };

      await sendgrid.send(message);
    }

    return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending emails:', error.response?.body || error);
    return new Response(JSON.stringify({ error: 'Failed to send emails' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
