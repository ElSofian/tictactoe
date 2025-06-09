import { requireAuth } from "@/lib/auth";
import Home from "@/components/home";
import { User } from "@/types";

export default async function HomePage() {
	const session = await requireAuth();
	
	return (
		<Home user={session.user as unknown as User} />
	)
}
