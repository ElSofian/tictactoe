"use client";

import { useState, useEffect } from "react";
import { useRouter }    from "next/navigation";
import { getSocket }    from "@/lib/socket";
import { User }         from "@/types";
import Main             from "@/components/main";
import Link from "next/link";

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
		<>
			<Link href="/api/auth/logout" prefetch={false} className="absolute top-4 right-4 text-white">
				<i className="fa-solid fa-right-from-bracket text-md" />
			</Link>
			<Main>
				<div className="flex flex-col items-center justify-center h-full gap-6">
					{searching ? (
						<div className="flex flex-col items-center justify-center gap-4">
							<i className="fa-solid fa-spinner-third spin-custom text-4xl" />
							<button onClick={cancelMatchmaking} className="bg-red-500 text-white px-4 py-2 font-bold rounded-md">
								Annuler
							</button>
						</div>
					) : (
						<button onClick={startMatchmaking} className="bg-black font-bold text-white px-4 py-2 rounded-md">
							Search a match
						</button>
					)}
				</div>
			</Main>
		</>
  );
}
