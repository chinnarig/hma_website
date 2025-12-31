// Next.js Email Utility using Nodemailer
// Standard Node.js email library for Next.js applications

import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

// Email configuration
const EMAIL_CONFIG = {
  from: process.env.EMAIL_FROM || 'noreply@heymello.ai',
  // TODO: Replace admin@heymello.ai with support@heymello.ai when support email is ready
  replyTo: process.env.EMAIL_REPLY_TO || 'admin@heymello.ai',
  enabled: process.env.ENABLE_EMAILS === 'true',
  // SMTP configuration (supports Gmail, SendGrid, AWS SES, etc.)
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  },
};

interface EmailData {
  to: string;
  subject: string;
  html: string;
}

// Create reusable transporter
let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport(EMAIL_CONFIG.smtp);
  }
  return transporter;
}

/**
 * Enhanced email styles with rich fonts and professional formatting
 */
const emailStyles = {
  // Base font family with fallbacks
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  
  container: 'max-width: 600px; margin: 0 auto; background: #ffffff;',
  
  // Header with gradient
  header: 'background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%); padding: 25px 20px; text-align: center;',
  
  // Brand name
  brandName: 'color: #ffffff; font-weight: 700; font-size: 24px; margin: 0 0 8px 0; letter-spacing: -0.5px;',
  
  tagline: 'color: rgba(255, 255, 255, 0.95); margin: 0; font-size: 13px; font-weight: 500;',
  
  // Content area
  content: 'padding: 40px 30px; background: #ffffff;',
  
  // Headings with rich typography
  heading: 'color: #1f2937; font-size: 26px; font-weight: 700; margin: 0 0 24px 0; line-height: 1.3; letter-spacing: -0.5px;',
  
  subheading: 'color: #374151; font-size: 20px; font-weight: 600; margin: 24px 0 16px 0; line-height: 1.4;',
  
  // Text styles
  text: 'color: #4b5563; font-size: 16px; line-height: 1.7; margin: 0 0 16px 0; font-weight: 400;',
  
  textBold: 'color: #1f2937; font-weight: 600;',
  
  // Info box with subtle background
  infoBox: 'background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%); border-left: 4px solid #6366f1; padding: 24px; margin: 28px 0; border-radius: 8px;',
  
  infoTitle: 'color: #4338ca; font-weight: 700; font-size: 16px; margin: 0 0 16px 0; letter-spacing: -0.3px;',
  
  infoText: 'color: #4b5563; font-size: 15px; margin: 10px 0; line-height: 1.6; font-weight: 500;',
  
  // List items
  listItem: 'color: #374151; font-size: 15px; margin: 12px 0; padding-left: 28px; line-height: 1.6; font-weight: 500;',
  
  // Divider
  divider: 'border: none; border-top: 2px solid #e5e7eb; margin: 32px 0;',
  
  // Footer
  footer: 'color: #6b7280; font-size: 14px; margin-top: 40px; border-top: 2px solid #e5e7eb; padding: 30px 20px 20px; text-align: center; background: #f9fafb;',
  
  footerText: 'margin: 8px 0; color: #6b7280; font-size: 14px; line-height: 1.6;',
  
  footerLink: 'color: #6366f1; text-decoration: none; font-weight: 600;',
};

/**
 * Create enhanced email template with professional header and footer
 */
function createEmailTemplate(content: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>HeyMello AI</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td { font-family: Arial, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%); font-family: ${emailStyles.fontFamily};">
  <div style="${emailStyles.container}">
    <!-- Header -->
    <div style="${emailStyles.header}">
      <div style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border-radius: 50%; width: 60px; height: 60px; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; border: 2px solid rgba(255, 255, 255, 0.3);">
        <span style="font-size: 30px;">🤖</span>
      </div>
      <h1 style="${emailStyles.brandName}">HeyMello AI</h1>
      <p style="${emailStyles.tagline}">AI Voice Agents That Understand Your Customers</p>
    </div>
    
    <!-- Content -->
    <div style="${emailStyles.content}">
      ${content}
    </div>
    
    <!-- Footer -->
    <div style="${emailStyles.footer}">
      <p style="${emailStyles.footerText}">
        <strong style="color: #6366f1; font-size: 15px;">HeyMello AI</strong><br>
        AI Voice Agents That Understand Your Customers
      </p>
      <p style="${emailStyles.footerText}">
        © ${new Date().getFullYear()} Mello AI Ltd. All rights reserved.
      </p>
      <p style="${emailStyles.footerText}">
        <a href="https://heymello.ai" style="${emailStyles.footerLink}">Visit Website</a> •
        <a href="https://heymello.ai/help-center" style="${emailStyles.footerLink}">Help Center</a> •
        <!-- TODO: Replace admin@heymello.ai with support@heymello.ai when support email is ready -->
        <a href="mailto:admin@heymello.ai" style="${emailStyles.footerLink}">Contact Support</a>
      </p>
      <p style="margin: 16px 0 0; color: #9ca3af; font-size: 12px;">
        🔒 This email was sent securely by HeyMello AI
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Send email using Nodemailer (supports all SMTP providers)
 */
async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    if (!EMAIL_CONFIG.enabled) {
      console.log('📧 Email would be sent (ENABLE_EMAILS=false):', {
        to: data.to,
        subject: data.subject,
        from: EMAIL_CONFIG.from,
      });
      return true;
    }

    // Validate SMTP configuration
    if (!EMAIL_CONFIG.smtp.auth.user || !EMAIL_CONFIG.smtp.auth.pass) {
      console.error('❌ SMTP credentials not configured. Set SMTP_USER and SMTP_PASSWORD environment variables.');
      return false;
    }

    // Send email using Nodemailer
    const transporter = getTransporter();
    const info = await transporter.sendMail({
      from: `"HeyMello AI" <${EMAIL_CONFIG.from}>`,
      to: data.to,
      replyTo: EMAIL_CONFIG.replyTo,
      subject: data.subject,
      html: data.html,
    });

    console.log('✅ Email sent successfully:', {
      messageId: info.messageId,
      to: data.to,
      subject: data.subject,
    });
    return true;
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    return false;
  }
}

/**
 * Demo Request Email Template - Professional and Clean
 */
function createDemoRequestEmail(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  preferredDate?: string;
}): string {
  return createEmailTemplate(`
    <div style="text-align: center; margin-bottom: 32px;">
      <h2 style="${emailStyles.heading}">🎉 Your Demo Request Has Been Received!</h2>
    </div>
    
    <p style="${emailStyles.text}">
      Hi <span style="${emailStyles.textBold}">${data.name}</span>,
    </p>
    
    <p style="${emailStyles.text}">
      Thank you for choosing <strong style="color: #6366f1;">HeyMello AI</strong> to explore intelligent voice agent solutions. 
      We're excited to help you unlock new opportunities in customer engagement.
    </p>

    <p style="${emailStyles.text}">
      Your demo request has been received. <strong>You can expect to receive demo details shortly.</strong>
    </p>

    <div style="${emailStyles.infoBox}">
      <p style="${emailStyles.infoTitle}">📋 Your Demo Request Details</p>
      ${data.company ? `<p style="${emailStyles.infoText}"><strong style="color: #1f2937;">Company:</strong> ${data.company}</p>` : ''}
      <p style="${emailStyles.infoText}"><strong style="color: #1f2937;">Email:</strong> ${data.email}</p>
      ${data.phone ? `<p style="${emailStyles.infoText}"><strong style="color: #1f2937;">Phone:</strong> ${data.phone}</p>` : ''}
      ${data.preferredDate ? `<p style="${emailStyles.infoText}"><strong style="color: #1f2937;">Preferred Date:</strong> ${data.preferredDate}</p>` : ''}
    </div>

    <p style="${emailStyles.text}">
      Meanwhile, feel free to explore our <a href="https://heymello.ai/help-center" style="color: #6366f1; font-weight: 600; text-decoration: none;">Help Center</a> 
      or read testimonials from satisfied customers on our website.
    </p>

    <div style="text-align: center; margin: 40px 0;">
      <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
        <tr>
          <td style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 10px; box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);">
            <a href="https://heymello.ai/help-center" style="color: #ffffff; text-decoration: none; font-weight: 700; font-size: 16px; display: block; padding: 16px 40px; letter-spacing: 0.3px;">
              📚 Visit Help Center
            </a>
          </td>
        </tr>
      </table>
    </div>

    <hr style="${emailStyles.divider}">

    <p style="${emailStyles.text}">
      If you have any questions or need immediate assistance, please don't hesitate to reach out:
    </p>
    
    <div style="text-align: center; margin: 24px 0;">
      <p style="margin: 8px 0;">
        <!-- TODO: Replace admin@heymello.ai with support@heymello.ai when support email is ready -->
        <a href="mailto:admin@heymello.ai" style="color: #6366f1; text-decoration: none; font-weight: 600; font-size: 16px;">
          ✉️ admin@heymello.ai
        </a>
      </p>
    </div>

    <p style="${emailStyles.text}; margin-top: 32px;">
      Best regards,<br><br>
      <strong style="color: #1f2937; font-size: 17px;">The HeyMello AI Team</strong><br>
      <span style="color: #6b7280; font-size: 14px;">Empowering businesses with intelligent voice agents</span>
    </p>
  `);
}

/**
 * Contact Sales Email Template
 */
function createContactSalesEmail(data: {
  name: string;
  email: string;
  company?: string;
  message?: string;
}): string {
  return createEmailTemplate(`
    <h1 style="${emailStyles.brandName}">HeyMello AI</h1>
    <h2 style="${emailStyles.heading}">Thank You for Contacting Our Sales Team!</h2>
    
    <p style="${emailStyles.text}">Hi ${data.name},</p>
    
    <p style="${emailStyles.text}">
      We've received your message and appreciate you taking the time to reach out. 
      Our sales team is reviewing your inquiry and will get back to you shortly.
    </p>

    <div style="${emailStyles.infoBox}">
      <p style="margin: 8px 0;"><strong>Your Contact Information:</strong></p>
      ${data.company ? `<p style="margin: 8px 0;"><strong>Company:</strong> ${data.company}</p>` : ''}
      <p style="margin: 8px 0;"><strong>Email:</strong> ${data.email}</p>
      ${data.message ? `
        <p style="margin: 8px 0;"><strong>Your Message:</strong></p>
        <p style="margin: 12px 0; padding: 12px; background: #fff; border-radius: 4px; font-style: italic; color: #666;">"${data.message}"</p>
      ` : ''}
    </div>

    <p style="${emailStyles.text}"><strong>What to expect:</strong></p>
    
    <div style="margin: 16px 0;">
      <p style="margin: 8px 0; padding-left: 20px;">• A sales representative will contact you within 4 business hours</p>
      <p style="margin: 8px 0; padding-left: 20px;">• We'll discuss your specific needs and use cases</p>
      <p style="margin: 8px 0; padding-left: 20px;">• You'll receive a customized solution proposal</p>
    </div>

    <div style="text-align: center; margin: 32px 0;">
      <a href="https://heymello.ai/request-demo" style="${emailStyles.button}">Book a Demo Now</a>
    </div>

    <div style="margin: 32px 0; text-align: center;">
      <p style="color: #7C3AED; font-size: 18px; font-weight: bold;">Join 10,000+ businesses already using HeyMello AI</p>
      <div style="display: flex; justify-content: space-around; margin: 20px 0;">
        <div style="text-align: center;">
          <p style="color: #7C3AED; font-size: 28px; font-weight: bold; margin: 0;">1M+</p>
          <p style="color: #666; font-size: 12px; margin: 4px 0;">Calls Processed</p>
        </div>
        <div style="text-align: center;">
          <p style="color: #7C3AED; font-size: 28px; font-weight: bold; margin: 0;">99.9%</p>
          <p style="color: #666; font-size: 12px; margin: 4px 0;">Uptime</p>
        </div>
        <div style="text-align: center;">
          <p style="color: #7C3AED; font-size: 28px; font-weight: bold; margin: 0;">35%</p>
          <p style="color: #666; font-size: 12px; margin: 4px 0;">Cost Reduction</p>
        </div>
      </div>
    </div>

    <p style="${emailStyles.text}">
      Need immediate assistance? Contact us at
      <!-- TODO: Replace admin@heymello.ai with sales@heymello.ai when sales email is ready -->
      <a href="mailto:admin@heymello.ai" style="color: #7C3AED;">admin@heymello.ai</a>
    </p>

    <p style="${emailStyles.text}">
      Best regards,<br>
      <strong>The HeyMello AI Sales Team</strong>
    </p>
  `);
}

/**
 * Pricing Inquiry Email Template
 */
function createPricingInquiryEmail(data: {
  name: string;
  email: string;
  company?: string;
}): string {
  return createEmailTemplate(`
    <h1 style="${emailStyles.brandName}">HeyMello AI</h1>
    <h2 style="${emailStyles.heading}">Thank You for Your Interest!</h2>
    
    <p style="${emailStyles.text}">Hi ${data.name},</p>
    
    <p style="${emailStyles.text}">
      Thank you for requesting pricing information for our AI Voice Agent solutions. 
      We've received your request and our team is preparing a customized pricing proposal 
      tailored to your needs.
    </p>

    ${data.company ? `
    <div style="${emailStyles.infoBox}">
      <p style="margin: 8px 0;"><strong>Company:</strong> ${data.company}</p>
      <p style="margin: 8px 0;"><strong>Contact Email:</strong> ${data.email}</p>
    </div>
    ` : ''}

    <p style="${emailStyles.text}"><strong>What happens next?</strong></p>
    
    <div style="margin: 16px 0;">
      <p style="margin: 8px 0; padding-left: 20px;">• Our pricing specialist will review your requirements</p>
      <p style="margin: 8px 0; padding-left: 20px;">• You'll receive a detailed pricing proposal within 24 hours</p>
      <p style="margin: 8px 0; padding-left: 20px;">• We'll schedule a call to discuss the best plan for your business</p>
    </div>

    <div style="text-align: center; margin: 32px 0;">
      <a href="https://heymello.ai/request-demo" style="${emailStyles.button}">Schedule a Demo</a>
    </div>

    <div style="border: 1px solid #e5e5e5; border-radius: 8px; padding: 20px; margin: 24px 0;">
      <p style="color: #7C3AED; font-size: 18px; font-weight: bold; margin: 0 0 16px;">Why choose HeyMello AI?</p>
      <p style="margin: 8px 0; padding-left: 20px;">✓ 99.9% Uptime guarantee</p>
      <p style="margin: 8px 0; padding-left: 20px;">✓ Up to 35% cost reduction</p>
      <p style="margin: 8px 0; padding-left: 20px;">✓ 24/7 AI voice agent support</p>
      <p style="margin: 8px 0; padding-left: 20px;">✓ Multi-language support (40+ languages)</p>
    </div>

    <p style="${emailStyles.text}">
      Questions? Reply to this email or visit our 
      <a href="https://heymello.ai/help-center" style="color: #7C3AED;">Help Center</a>
    </p>

    <p style="${emailStyles.text}">
      Best regards,<br>
      <strong>The HeyMello AI Team</strong>
    </p>
  `);
}

/**
 * Send demo request acknowledgement email
 */
export async function sendDemoRequestAck(data: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  preferredDate?: string;
}): Promise<boolean> {
  try {
    const emailHtml = createDemoRequestEmail({
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      company: data.company,
      phone: data.phone,
      preferredDate: data.preferredDate,
    });
    
    return await sendEmail({
      to: data.email,
      subject: '🎉 Your HeyMello AI Demo Request - Next Steps',
      html: emailHtml,
    });
  } catch (error) {
    console.error('Error sending demo request acknowledgement:', error);
    return false;
  }
}

/**
 * Send contact sales acknowledgement email
 */
export async function sendContactSalesAck(data: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message?: string;
}): Promise<boolean> {
  try {
    const emailHtml = createContactSalesEmail({
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      company: data.company,
      message: data.message,
    });
    
    return await sendEmail({
      to: data.email,
      subject: 'Thank You for Contacting HeyMello AI Sales',
      html: emailHtml,
    });
  } catch (error) {
    console.error('Error sending contact sales acknowledgement:', error);
    return false;
  }
}

/**
 * Send pricing inquiry acknowledgement email
 */
export async function sendPricingInquiryAck(data: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
}): Promise<boolean> {
  try {
    const emailHtml = createPricingInquiryEmail({
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      company: data.company,
    });
    
    return await sendEmail({
      to: data.email,
      subject: 'Your HeyMello AI Pricing Request - Information Coming Soon',
      html: emailHtml,
    });
  } catch (error) {
    console.error('Error sending pricing inquiry acknowledgement:', error);
    return false;
  }
}

