"use client";

import Main from "@/components/main";
import { useState, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { getSocket } from "@/lib/socket";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function calculateWinner(sq: (string|null)[]) {
	const lines = [
		[0,1,2],[3,4,5],[6,7,8],
		[0,3,6],[1,4,7],[2,5,8],
		[0,4,8],[2,4,6],
	] as const;
	for (const [a,b,c] of lines) {
		if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) return sq[a];
	}
	return null;
}

export default function GamePage() {
  const { gameId } = useParams();
  const params = useSearchParams();
  const router = useRouter();
  const symbol = params.get("symbol") as "X"|"O";
  const opponent = params.get("opponent") ?? "Opponent";
  const socket = getSocket();

  const [squares, setSquares] = useState<(string|null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    socket.emit("joinGame", { gameId, symbol });
    const onRedirect = () => router.push("/");
    socket.on("redirectHome", onRedirect);

    return () => {
      socket.off("redirectHome", onRedirect);
      socket.emit("leaveGame", { gameId });
    };
  }, [gameId, symbol, router, socket]);

  useEffect(() => {
    setStatus(symbol === "X" ? "Votre tour" : `Au tour de ${opponent}`);
  }, [symbol, opponent]);

  useEffect(() => {
    const onMove = ({ squares: sq, xIsNext: nx }: { squares: (string|null)[], xIsNext: boolean }) => {
      setSquares(sq);
      setXIsNext(nx);
    };
    const onTurn = ({ turn }: { turn: "X"|"O" }) => {
      setStatus(turn === symbol ? "Votre tour" : `Au tour de ${opponent}`);
    };
    const onWinner = ({ winner }: { winner: "X"|"O" }) => {
      setStatus(winner === symbol ? "Vous avez gagné !" : "Vous avez perdu !");
    };
    const onDraw = () => {
      setStatus("Égalité !");
    };

    socket.on("move", onMove);
    socket.on("turn", onTurn);
    socket.on("winner", onWinner);
    socket.on("draw", onDraw);

    return () => {
      socket.off("move", onMove);
      socket.off("turn", onTurn);
      socket.off("winner", onWinner);
      socket.off("draw", onDraw);
    };
  }, [symbol, opponent, socket]);

  useEffect(() => {
    const onGameEnded = (data: { winner?: string; draw?: boolean; abandoned?: boolean }) => {
      if (data.abandoned) {
        toast.info("Votre adversaire a abandonné la partie, vous avez donc gagné.");
      } else if (data.draw) {
        toast.info("Match nul !");
      } else if (data.winner === symbol) {
        toast.success("Vous avez gagné !");
      } else {
        toast.error("Vous avez perdu !");
      }
      setTimeout(() => router.push("/"), 3000);
    };

    socket.on("gameEnded", onGameEnded);

    return () => {
      socket.off("gameEnded", onGameEnded);
    };
  }, [symbol, router, socket]);

	function getTheme() {
		const theme = localStorage.getItem("theme") || "light";
		return theme === "light" ? "light" : "dark";
	}

  const handleClick = (i: number) => {
    const next = squares.slice();
    if (next[i] || calculateWinner(next)) return;
    if ((xIsNext ? "X" : "O") !== symbol) return;

    next[i] = symbol;
    const newX = !xIsNext;
    setSquares(next);
    setXIsNext(newX);

    const win = calculateWinner(next);
    if (win) {
      socket.emit("winner", { gameId, winner: win });
      return;
    }
    if (next.every(v => v !== null)) {
      socket.emit("draw", { gameId });
      return;
    }

    socket.emit("turn", { gameId, turn: newX ? "X" : "O" });
    socket.emit("move", { gameId, squares: next, xIsNext: newX });
  };

  return (
    <Main inGame={true}>
			<div className="flex flex-col items-center justify-center gap-2">
				<ToastContainer position="top-center" autoClose={3000} theme={getTheme()} />
				<h1 className="text-4xl mb-6 text-center">{status}</h1>
				<div className="grid grid-cols-3 gap-2">
					{squares.map((v, i) => (
						<div
						key={i}
						onClick={() => handleClick(i)}
						className={`
							w-20 h-20 flex items-center justify-center
							text-3xl font-bold text-white
							bg-black dark:bg-gray-700 rounded cursor-pointer
							${!calculateWinner(squares) && v === null ? 'hover:bg-gray-600' : ''}
							`}
							>
							{v}
						</div>
					))}
				</div>
			</div>
    </Main>
  );
}
