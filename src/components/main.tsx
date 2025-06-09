import Link from "next/link";

export default function Main({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-gray-800 text-white">
			<div className="flex items-center justify-center h-screen">
				{children}
			</div>
		</div>
	)
}