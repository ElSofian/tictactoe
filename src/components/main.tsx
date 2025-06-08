export default function Main({ children }: { children: React.ReactNode }) {

	return (
		<div className="flex items-center justify-center h-screen bg-gray-800 text-white">
			{children}
		</div>
	)

}