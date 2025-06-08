import Game from "@/components/game";

export default async function GamePage({ params }: { params: Promise<{ gameId: string }> }) {
	const { gameId } = await params;

	return (
		<Game />
	)
}