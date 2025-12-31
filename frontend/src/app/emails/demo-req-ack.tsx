import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface DemoRequestEmailProps {
  name: string;
  email: string;
  company?: string;
  phoneNumber?: string;
  preferredDate?: string;
}

export const DemoRequestEmail = ({
  name,
  email,
  company,
  phoneNumber,
  preferredDate,
}: DemoRequestEmailProps) => (
  <Html>
    <Head />
    <Preview>Your HeyMello AI demo is being scheduled!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          <span style={brandName}>HeyMello AI</span>
        </Heading>

        <Section style={heroSection}>
          <Heading style={h2}>Your Demo Request Has Been Received!</Heading>
        </Section>

        <Text style={text}>Hi {name},</Text>

        <Text style={text}>
          Thank you for choosing HeyMello AI to explore intelligent voice agent solutions. 
          We're excited to help you unlock new opportunities in customer engagement.
        </Text>

        <Text style={text}>
          Your demo request has been received. You can expect to receive demo details shortly.
        </Text>

        <Section style={infoBox}>
          <Text style={infoText}>
            <strong>Your Demo Request Details:</strong>
          </Text>
          {company && (
            <Text style={infoText}>
              <strong>Company:</strong> {company}
            </Text>
          )}
          <Text style={infoText}>
            <strong>Email:</strong> {email}
          </Text>
          {phoneNumber && (
            <Text style={infoText}>
              <strong>Phone:</strong> {phoneNumber}
            </Text>
          )}
          {preferredDate && (
            <Text style={infoText}>
              <strong>Preferred Date:</strong> {preferredDate}
            </Text>
          )}
        </Section>

        <Text style={text}>
          Meanwhile, feel free to visit our Help Center or explore testimonials from 
          satisfied customers on our website.
        </Text>

        <Section style={ctaSection}>
          <Link href="https://heymello.ai/help-center" style={button}>
            Visit Help Center
          </Link>
        </Section>

        <Hr style={divider} />

        <Text style={footer}>
          If you have any questions or need immediate assistance, please reply to
          this email or contact us at{' '}
          {/* TODO: Replace admin@heymello.ai with support@heymello.ai when support email is ready */}
          <Link href="mailto:admin@heymello.ai" style={link}>
            admin@heymello.ai
          </Link>
        </Text>

        <Text style={footer}>
          Best regards,
          <br />
          <strong>The HeyMello AI Team</strong>
        </Text>

        <Text style={footerSmall}>
          © {new Date().getFullYear()} Mello AI Ltd. All rights reserved.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default DemoRequestEmail;

const main = {
  backgroundColor: '#f6f6f6',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
  borderRadius: '8px',
};

const brandName = {
  color: '#7C3AED',
  fontWeight: 'bold',
  fontSize: '28px',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 30px',
  padding: '0',
};

const heroSection = {
  textAlign: 'center' as const,
  margin: '0 0 30px',
};

const h2 = {
  color: '#1a1a1a',
  fontSize: '26px',
  fontWeight: 'bold',
  margin: '0',
  padding: '0',
};

const text = {
  color: '#404040',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 0',
};

const bulletText = {
  color: '#404040',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '8px 0',
  paddingLeft: '20px',
};

const infoBox = {
  backgroundColor: '#f8f5ff',
  borderLeft: '4px solid #7C3AED',
  padding: '20px',
  margin: '24px 0',
  borderRadius: '4px',
};

const infoText = {
  color: '#404040',
  fontSize: '14px',
  margin: '8px 0',
};

const timelineSection = {
  margin: '24px 0',
};

const timelineItem = {
  display: 'flex',
  alignItems: 'flex-start',
  margin: '20px 0',
  gap: '16px',
};

const timelineNumber = {
  backgroundColor: '#7C3AED',
  color: '#ffffff',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
  fontWeight: 'bold',
  flexShrink: 0,
  textAlign: 'center' as const,
  padding: '6px',
};

const timelineTitle = {
  color: '#1a1a1a',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 4px',
};

const timelineDesc = {
  color: '#666666',
  fontSize: '14px',
  margin: '0',
};

const highlight = {
  color: '#7C3AED',
  fontSize: '18px',
  margin: '24px 0 16px',
};

const ctaSection = {
  textAlign: 'center' as const,
  margin: '32px 0',
  padding: '24px',
  backgroundColor: '#f8f5ff',
  borderRadius: '8px',
};

const ctaTitle = {
  color: '#1a1a1a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px',
};

const button = {
  backgroundColor: '#7C3AED',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
};

const divider = {
  borderColor: '#e5e5e5',
  margin: '32px 0',
};

const link = {
  color: '#7C3AED',
  textDecoration: 'underline',
};

const featuresSection = {
  margin: '24px 0',
};

const featureItem = {
  display: 'flex',
  alignItems: 'flex-start',
  margin: '16px 0',
  gap: '12px',
};

const featureIcon = {
  fontSize: '24px',
  margin: '0',
};

const featureTitle = {
  color: '#1a1a1a',
  fontSize: '15px',
  fontWeight: 'bold',
  margin: '0 0 4px',
};

const featureDesc = {
  color: '#666666',
  fontSize: '14px',
  margin: '0',
};

const preparationBox = {
  backgroundColor: '#fff9e6',
  border: '2px solid #ffd700',
  borderRadius: '8px',
  padding: '20px',
  margin: '24px 0',
};

const preparationTitle = {
  color: '#1a1a1a',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 12px',
};

const footer = {
  color: '#666666',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '16px 0',
};

const footerSmall = {
  color: '#999999',
  fontSize: '12px',
  margin: '24px 0 0',
  textAlign: 'center' as const,
};
