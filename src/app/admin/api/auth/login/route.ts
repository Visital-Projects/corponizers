import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { AdminModel } from '@/models/Admin';
import { AdminLoginSchema } from '@/lib/zod-schemas';
import { comparePassword, hashPassword, signToken, TOKEN_NAME } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = AdminLoginSchema.parse(body);

    const db = await connectToDatabase();
    
    // Default master admin fallback for immediate demo / deployment
    const MASTER_EMAIL = 'admin@corponizers.com';
    const MASTER_PASS = 'Corponizers2026!';

    let adminUser = null;

    if (db) {
      adminUser = await AdminModel.findOne({ email });
      if (!adminUser && email === MASTER_EMAIL) {
        const hash = await hashPassword(MASTER_PASS);
        adminUser = await AdminModel.create({
          email: MASTER_EMAIL,
          passwordHash: hash,
          name: 'Chief Talent Officer',
          role: 'SuperAdmin',
        });
      }
    }

    let isValid = false;
    if (adminUser) {
      isValid = await comparePassword(password, adminUser.passwordHash);
    } else if (email === MASTER_EMAIL && password === MASTER_PASS) {
      isValid = true;
    }

    if (!isValid) {
      return NextResponse.json({ success: false, error: 'Invalid admin credentials' }, { status: 401 });
    }

    const payload = {
      id: adminUser ? adminUser._id.toString() : 'master-id',
      email: email,
      name: adminUser ? adminUser.name : 'Enterprise SuperAdmin',
      role: 'SuperAdmin',
    };

    const token = signToken(payload);

    const response = NextResponse.json({
      success: true,
      message: 'Authentication successful',
      user: payload,
    });

    response.cookies.set(TOKEN_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });

    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
