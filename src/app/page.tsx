import { requireAuth } from "@/lib/auth";
import Home from "@/components/home";

export default async function HomePage() {
	await requireAuth();

	return (
		<Home />
	)
}
