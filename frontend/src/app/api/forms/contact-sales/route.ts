import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { sendContactSalesAck } from '@/lib/email';
import { 
  isBusinessEmail, 
  isValidEmail, 
  isValidPhoneNumber, 
  normalizePhoneNumber,
  isValidName,
  isValidCompany 
} from '@/lib/validation';

// Validation schema
interface ContactSalesData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle?: string;
  message?: string;
}

// Enhanced validation function
function validateContactSales(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Validate first name
  if (!data.firstName || !isValidName(data.firstName)) {
    errors.push('First name is required and must be 2-50 characters (letters only)');
  }
  
  // Validate last name
  if (!data.lastName || !isValidName(data.lastName)) {
    errors.push('Last name is required and must be 2-50 characters (letters only)');
  }
  
  // Validate email format
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Valid email address is required');
  } else if (!isBusinessEmail(data.email)) {
    errors.push('Please use a business email address (free email providers like Gmail, Yahoo, etc. are not accepted)');
  }
  
  // Validate phone number
  if (!data.phone || !isValidPhoneNumber(data.phone)) {
    errors.push('Valid phone number is required (10-15 digits)');
  }
  
  // Validate company
  if (!data.company || !isValidCompany(data.company)) {
    errors.push('Company name is required and must be 2-100 characters');
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validation = validateContactSales(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    // Insert into database with minimal schema
    const sql = `
      INSERT INTO form_submissions (
        form_type, first_name, last_name, email, phone, 
        company, job_title, message
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id, created_at
    `;

    const values = [
      'contact_sales',
      body.firstName.trim(),
      body.lastName.trim(),
      body.email.toLowerCase().trim(),
      normalizePhoneNumber(body.phone),
      body.company.trim(),
      body.jobTitle?.trim() || null,
      body.message?.trim() || null
    ];

    const result = await query(sql, values);
    const submission = result.rows[0];

    // Send acknowledgement email (non-blocking) - COMMENTED OUT
    // sendContactSalesAck({
    //   firstName: body.firstName,
    //   lastName: body.lastName,
    //   email: body.email,
    //   company: body.company,
    //   message: body.message,
    // }).catch(err => console.error('Email send failed:', err));

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been submitted successfully',
      submissionId: submission.id
    }, { status: 201 });

  } catch (error) {
    console.error('Error submitting sales inquiry:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit inquiry. Please try again.' 
      },
      { status: 500 }
    );
  }
}

// GET method to retrieve submissions (for admin/testing)
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    const sql = `
      SELECT id, form_type, first_name, last_name, email, phone, 
             company, job_title, message, status, created_at
      FROM form_submissions
      WHERE form_type = 'contact_sales'
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `;

    const result = await query(sql, [limit, offset]);

    return NextResponse.json({
      success: true,
      data: result.rows,
      count: result.rowCount
    });

  } catch (error) {
    console.error('Error fetching sales inquiries:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
