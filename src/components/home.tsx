"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSocket } from "@/lib/socket";
import { User } from "@/types";
import Main from "@/components/main";

export default function Home({ user }: { user: User }) {
  const [searching, setSearching] = useState(false);
  const router = useRouter();
  const socket = getSocket();

  useEffect(() => {
    socket.on("matchFound", ({ gameId, symbol, opponent }) => {
      router.push(`/${gameId}?symbol=${symbol}&opponent=${encodeURIComponent(opponent)}`);
    });
		
    return () => {
      socket.off("matchFound");
    };
  }, [router, socket]);

  const startMatchmaking = () => {
    setSearching(true);
    socket.emit("joinMatchmaking", { user });
  };

  const cancelMatchmaking = () => {
    setSearching(false);
    socket.emit("leaveMatchmaking", { user });
  };

  return (
		<Main inGame={false}>
			<div className="flex flex-col items-center justify-center h-full gap-6">
				{searching ? (
					<div className="flex flex-col items-center justify-center gap-4">
						<i className="fa-solid fa-spinner-third spin-custom text-4xl" />
						<button onClick={cancelMatchmaking} className="bg-red-500 text-white px-4 py-2 font-bold rounded-md cursor-pointer">
							Annuler
						</button>
					</div>
				) : (
					<button onClick={startMatchmaking} className="bg-black text-white dark:bg-gray-300 dark:text-black dark:shadow-main font-bold px-4 py-2 rounded-md cursor-pointer">
						Search a match
					</button>
				)}
			</div>
		</Main>
  );
}
