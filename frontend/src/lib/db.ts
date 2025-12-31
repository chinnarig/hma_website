import { Pool } from 'pg';

// Create a singleton pool instance
let pool: Pool | null = null;

// Force pool recreation (used when SSL config needs to be updated)
async function resetPool() {
  if (pool) {
    try {
      await pool.end();
    } catch (e) {
      // Ignore errors when ending pool
    }
    pool = null;
  }
}

export function getPool(): Pool {
  if (!pool) {
    // Parse DATABASE_URL to handle SSL configuration properly
    const databaseUrl = process.env.DATABASE_URL;
    
    // Check if DATABASE_URL is configured
    if (!databaseUrl || databaseUrl.trim() === '') {
      throw new Error('DATABASE_URL is not configured. Please set it in .env.local file.');
    }
    
    console.log('🔧 Creating database pool...');
    console.log('   Host:', databaseUrl.includes('35.232.108.201') ? '35.232.108.201 (GCP)' : 'other');
    console.log('   SSL Mode:', databaseUrl.includes('sslmode=require') ? 'require' : 'auto');
    
    // SSL configuration for GCP Cloud SQL and self-signed certificates
    // ALWAYS use SSL for GCP database (35.232.108.201) regardless of sslmode parameter
    const isGcpDatabase = databaseUrl.includes('35.232.108.201');
    const needsSsl = databaseUrl.includes('sslmode=require') || isGcpDatabase;
    
    const sslConfig = needsSsl ? {
      rejectUnauthorized: false, // CRITICAL: Accept self-signed certificates
      ca: undefined, // Don't use CA certificate
      checkServerIdentity: () => undefined, // CRITICAL: Skip hostname verification
    } : false;

    console.log('   SSL Config:', sslConfig ? 'Enabled (rejectUnauthorized: false, no CA verification)' : 'Disabled');

    pool = new Pool({
      connectionString: databaseUrl,
      ssl: sslConfig,
      max: 20, // Maximum number of clients in the pool
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000, // Increased timeout for remote connections
      keepAlive: true,
      keepAliveInitialDelayMillis: 10000,
    });

    // Handle pool errors
    pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
    });
    
    // Log successful pool creation
    console.log('✅ Database pool created successfully');
  }

  return pool;
}

// Helper function to execute queries with retry logic
export async function query(text: string, params?: any[], retries = 3) {
  const start = Date.now();
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const pool = getPool(); // Get pool on each attempt (will recreate if null)
      const res = await pool.query(text, params);
      const duration = Date.now() - start;
      console.log('Executed query', { text: text.substring(0, 100), duration, rows: res.rowCount });
      return res;
    } catch (error: any) {
      console.error(`Database query error (attempt ${attempt}/${retries}):`, {
        message: error.message,
        code: error.code,
        errno: error.errno,
        syscall: error.syscall
      });
      
      // If it's an SSL/connection error and we have retries left, wait and retry
      if (attempt < retries && (
        error.message?.includes('certificate') ||
        error.message?.includes('SSL') ||
        error.message?.includes('ECONNRESET') ||
        error.message?.includes('Cannot use a pool after calling end') ||
        error.code === 'ENOTFOUND' ||
        error.code === 'ECONNREFUSED' ||
        error.code === 'UNABLE_TO_VERIFY_LEAF_SIGNATURE'
      )) {
        // For SSL errors, reset the pool to force reconfiguration
        if (error.code === 'UNABLE_TO_VERIFY_LEAF_SIGNATURE') {
          console.log('⚠️  SSL verification error - resetting pool...');
          await resetPool();
        }
        console.log(`Retrying in ${attempt * 1000}ms...`);
        await new Promise(resolve => setTimeout(resolve, attempt * 1000));
        continue;
      }
      
      // Provide helpful error message for unconfigured database
      if (error.message?.includes('DATABASE_URL is not configured')) {
        console.error('\n❌ DATABASE ERROR: Database is not configured for local development.');
        console.error('📝 To fix this, update your .env.local file with one of these options:');
        console.error('   1. Connect to UAT database: DATABASE_URL="postgresql://postgres:PASSWORD@35.232.108.201:5432/website?sslmode=require"');
        console.error('   2. Use local database: DATABASE_URL="postgresql://postgres:password@localhost:5432/heymello_website"');
        console.error('   3. Leave empty to skip database (forms will return errors)\n');
      }
      
      throw error;
    }
  }
  
  // Should never reach here, but TypeScript needs it
  throw new Error('Query failed after all retry attempts');
}

// Helper function for transactions
export async function transaction(callback: (client: any) => Promise<any>) {
  const pool = getPool();
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

// Close pool (useful for graceful shutdown)
export async function closePool() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
