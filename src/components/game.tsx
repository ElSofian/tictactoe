"use client";

import Main from "@/components/main";
import { useState } from "react";

function calculateWinner(squares: string[]) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

export default function Game() {

	const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	const handleClick = (i: number) => {
		const nextSquares = squares.slice();
		if (nextSquares[i] || calculateWinner(nextSquares)) {
			return;
		}
		console.log(nextSquares);
		nextSquares[i] = xIsNext ? "X" : "O";
		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	};

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = `Winner is ${winner} ! Congrats !`;
	} else if (squares.every(square => square !== null)) {
		status = "Draw!";
	} else {
		status = `Turn: ${xIsNext ? "X" : "O"}`;
	}

	return (
		<Main>
			<div className="flex flex-col items-center justify-center gap-8 text-white">
				<h1 className="text-6xl font-bold text-center">{status}</h1>
				<div className="flex flex-col items-center justify-center">
					<div className="grid grid-cols-3 gap-2">
						<div className="bg-gray-500 w-20 h-20 text-white flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-gray-600" onClick={() => handleClick(0)}>{squares[0]}</div>
						<div className="bg-gray-500 w-20 h-20 text-white flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-gray-600" onClick={() => handleClick(1)}>{squares[1]}</div>
						<div className="bg-gray-500 w-20 h-20 text-white flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-gray-600" onClick={() => handleClick(2)}>{squares[2]}</div>
						<div className="bg-gray-500 w-20 h-20 text-white flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-gray-600" onClick={() => handleClick(3)}>{squares[3]}</div>
						<div className="bg-gray-500 w-20 h-20 text-white flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-gray-600" onClick={() => handleClick(4)}>{squares[4]}</div>
						<div className="bg-gray-500 w-20 h-20 text-white flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-gray-600" onClick={() => handleClick(5)}>{squares[5]}</div>
						<div className="bg-gray-500 w-20 h-20 text-white flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-gray-600" onClick={() => handleClick(6)}>{squares[6]}</div>
						<div className="bg-gray-500 w-20 h-20 text-white flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-gray-600" onClick={() => handleClick(7)}>{squares[7]}</div>
						<div className="bg-gray-500 w-20 h-20 text-white flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-gray-600" onClick={() => handleClick(8)}>{squares[8]}</div>
					</div>
				</div>
			</div>
		</Main>
	)
}