import Navbar from "@/components/navbar";

export default function Main({ children, inGame }: { children: React.ReactNode, inGame: boolean }) {
	return (
		<div className="relative dark:bg-gray-900 dark:text-white w-full h-screen">
			<Navbar inGame={inGame} />
			<div className="flex items-center justify-center h-screen">
				{children}
			</div>
		</div>
	)
}