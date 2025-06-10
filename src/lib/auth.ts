import { Lucia } from 'lucia';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { prisma } from './prisma';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from 'bcryptjs';

declare module 'lucia' {
	interface Register {
		Lucia: typeof auth;
		DatabaseUserAttributes: {
			username: string;
			grade: string;
			avatar: string;
			active_employee_id: number;
			discord_user_id: string;
			discord_avatar_hash: string;
		};
	}
}

export const sessionCookieName = process.env.NODE_ENV === 'production' ? '__Secure-session' : 'session';
const isProd = process.env.NODE_ENV === 'production';

export const auth = new Lucia(new PrismaAdapter(prisma.session, prisma.user), {
	sessionCookie: {
		name: sessionCookieName,
		expires: false,
		attributes: {
			secure: isProd,
			sameSite: isProd ? 'none' : 'lax',
			domain: isProd ? 'calipso.me' : undefined,
			path: '/'
		}
	},
	getUserAttributes: (user) => ({
		username: user.username,
		avatar: user.avatar,
		active_employee_id: user.active_employee_id,
		discord_user_id: user.discord_user_id,
		discord_avatar_hash: user.discord_avatar_hash
	})
});

export async function login(formData: FormData) {
	const username = formData.get('username') as string;
	const password = formData.get('password') as string;

	const user = await prisma.user.findUnique({
		where: { username }
	});
	
	if (!user || !await bcrypt.compare(password, user.hashedPassword)) {
		throw new Error("INVALID_CREDENTIALS");
	}

	const session = await auth.createSession(user.id, {
		expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
	});

	return { session };
}

export async function register(formData: FormData) {
	const username = formData.get('username') as string;
	const password = formData.get('password') as string;

	const existingUser = await prisma.user.findUnique({
		where: { username }
	});
	
	if (existingUser) {
		throw new Error("USER_ALREADY_EXISTS");
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const user = await prisma.user.create({
		data: { username, hashedPassword }
	});

	const session = await auth.createSession(user.id, {
		expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
	});

	return { session };
}

export async function requireAuth() {
	const cookieStore = await cookies();
	const sid = cookieStore.get(sessionCookieName)?.value;
  if (!sid) redirect("/auth/login");

  const session = await auth.validateSession(sid);
  if (!session.user) redirect("/auth/login");

	return session;
}