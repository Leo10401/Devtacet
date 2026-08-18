import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import { NextRequest } from 'next/server'

const SECRET_KEY = process.env.JWT_SECRET || 'devtacet_samosa_admin_super_secret_key_2026'

// Admin default credentials (configurable via .env / .env.local)
export const ADMIN_CREDENTIALS = {
  email: process.env.ADMIN_EMAIL || 'admin@devtacet.com',
  username: process.env.ADMIN_USERNAME || 'admin',
  password: process.env.ADMIN_PASSWORD || 'samosa@devtacet2026',
  passwordHash: process.env.ADMIN_PASSWORD_HASH || '',
}

export const COOKIE_NAME = 'samosa_admin_session'

/**
 * Hashes a plaintext password using bcrypt with 10 salt rounds
 */
export async function hashPassword(plainText: string): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(plainText, salt)
}

/**
 * Validates a plaintext password against a stored bcrypt hash or password string
 */
export async function verifyPassword(plainText: string): Promise<boolean> {
  const targetHash = ADMIN_CREDENTIALS.passwordHash
  const targetPlain = ADMIN_CREDENTIALS.password

  if (!plainText) return false

  // If a bcrypt hash is explicitly set in env (starts with $2a$, $2b$, or $2y$)
  if (targetHash && /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/.test(targetHash)) {
    return bcrypt.compare(plainText, targetHash)
  }

  // Otherwise hash the configured password and compare via bcrypt
  const expectedHash = await bcrypt.hash(targetPlain, 10)
  return bcrypt.compare(plainText, expectedHash)
}

/**
 * Creates a signed HMAC-SHA256 session token
 */
export function createAdminToken(identifier: string): string {
  const payload = {
    user: identifier,
    issuedAt: Date.now(),
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
  }

  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url')
  const signature = crypto
    .createHmac('sha256', SECRET_KEY)
    .update(encodedPayload)
    .digest('base64url')

  return `${encodedPayload}.${signature}`
}

/**
 * Verifies a signed HMAC-SHA256 session token
 */
export function verifyAdminToken(token?: string | null): { valid: boolean; user?: string } {
  if (!token) return { valid: false }

  const parts = token.split('.')
  if (parts.length !== 2) return { valid: false }

  const [encodedPayload, signature] = parts

  const expectedSignature = crypto
    .createHmac('sha256', SECRET_KEY)
    .update(encodedPayload)
    .digest('base64url')

  if (signature !== expectedSignature) {
    return { valid: false }
  }

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString())
    if (Date.now() > payload.expiresAt) {
      return { valid: false }
    }
    return { valid: true, user: payload.user }
  } catch {
    return { valid: false }
  }
}

/**
 * Checks if a NextRequest has a valid admin session cookie or Authorization header
 */
export function isRequestAuthenticated(req: NextRequest): boolean {
  // Check cookie
  const cookieToken = req.cookies.get(COOKIE_NAME)?.value
  if (cookieToken && verifyAdminToken(cookieToken).valid) {
    return true
  }

  // Check Authorization Bearer header
  const authHeader = req.headers.get('authorization')
  if (authHeader?.startsWith('Bearer ')) {
    const bearerToken = authHeader.substring(7).trim()
    if (verifyAdminToken(bearerToken).valid) {
      return true
    }
  }

  return false
}
