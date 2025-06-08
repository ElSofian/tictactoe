"use client";

import Main from "./main";

export default function Home() {
	
	const launchMatchmaking = () => {
		console.log("Launching matchmaking...");
	}

	return (
		<Main>
			<button className="bg-red-700 text-white text-3xl font-bold py-4 px-10 rounded-xl shadow-little cursor-pointer" onClick={launchMatchmaking}>
				Search a match
			</button>
		</Main>
	)
}