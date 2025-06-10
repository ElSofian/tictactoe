import { NextResponse } from "next/server";
import { auth, register } from "@/lib/auth";

export async function POST(req: Request) {
  const formData = await req.formData();
  try {
    const { session } = await register(formData);
    const sessionCookie = auth.createSessionCookie(session.id);

    const res = NextResponse.redirect(new URL(`/`, process.env.NEXTAUTH_URL), { status: 303 });
    res.cookies.set({
      name: sessionCookie.name,
      value: sessionCookie.value,
      path: sessionCookie.attributes.path,
      httpOnly: sessionCookie.attributes.httpOnly,
      secure: sessionCookie.attributes.secure,
      sameSite: sessionCookie.attributes.sameSite as "lax" | "strict" | "none",
      maxAge: sessionCookie.attributes.maxAge,
    });

    return res;
  } catch (e) {
		const url = new URL("/auth/register", process.env.NEXTAUTH_URL);

		if (e instanceof Error) {
			switch (e.message) {
				case "USER_ALREADY_EXISTS": url.searchParams.set("error", "1"); break;
				
				default:	url.searchParams.set("error", "2"); break;
			}
		}

    return NextResponse.redirect(url, { status: 303 });
  }
}
