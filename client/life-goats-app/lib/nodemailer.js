import nodemailer from 'nodemailer';

// Create a Nodemailer transporter using Hostinger SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com', // Hostinger SMTP server
  port: 465, // Secure SMTP port
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // Hostinger webmail address
    pass: process.env.EMAIL_PASS, // Hostinger webmail password
  },
  tls: {
    rejectUnauthorized: false, // Optional, disable certificate validation
  },
});

export default transporter;
