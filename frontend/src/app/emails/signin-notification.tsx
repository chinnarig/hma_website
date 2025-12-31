import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface SignInNotificationEmailProps {
  userName: string;
  ip: string;
  location: string;
  country: string;
  signInTime: string;
}

export const SignInNotificationEmail = ({
  userName,
  ip,
  location,
  country,
  signInTime,
}: SignInNotificationEmailProps) => (
  <Html>
    <Head />
    <Preview>New sign-in to your HeyMello AI account</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          <span style={brandName}>HeyMello AI</span>
        </Heading>
        
        <Section style={heroSection}>
          <Heading style={h2}>New Sign-In Detected</Heading>
        </Section>
        
        <Text style={text}>Hi {userName},</Text>
        
        <Text style={text}>
          We noticed a new sign-in to your HeyMello AI account.
        </Text>

        <Section style={infoBox}>
          <Text style={infoText}>
            <strong>Sign-In Details:</strong>
          </Text>
          <Text style={infoText}>
            <strong>IP Address:</strong> {ip}
          </Text>
          <Text style={infoText}>
            <strong>Location:</strong> {location}
          </Text>
          <Text style={infoText}>
            <strong>Country:</strong> {country}
          </Text>
          <Text style={infoText}>
            <strong>Time:</strong> {signInTime}
          </Text>
        </Section>

        <Text style={text}>
          If this was you, you can safely ignore this email.
        </Text>

        <Hr style={divider} />

        <Text style={footer}>
          Best regards,
          <br />
          <strong>The HeyMello AI Team</strong>
        </Text>

        <Text style={footerSmall}>
          © {new Date().getFullYear()} HeyMello AI. All rights reserved.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default SignInNotificationEmail;

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

const divider = {
  borderColor: '#e5e5e5',
  margin: '32px 0',
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
