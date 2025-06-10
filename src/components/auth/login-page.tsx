"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import Navbar from "@/components/navbar";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
	const [page, setPage] = useState("login");

  useEffect(() => {
		switch (error) {
			case "1": toast.error("Identifiants incorrects:"); break;
		}
  }, [error]);

	return (
		<>
			<Navbar inGame={false} />
			<div className="flex flex-col items-center justify-center w-full h-full dark:text-white">

				<div className="flex flex-col items-center">
					<div className="flex w-full border border-white/25 rounded-full bg-white dark:bg-gray-700 p-1 mb-2">
						<button
							onClick={() => setPage("login")}
							className={`px-6 py-1 w-full text-sm font-medium rounded-full transition-all duration-300 ${
								page === "login"
									? "bg-gray-100 dark:bg-black text-gray-900 dark:text-white shadow-sm"
									: "text-gray-600 dark:text-white "
							}`}
						>
							Se connecter
						</button>
						<button
							onClick={() => setPage("register")}
							className={`px-6 py-1 w-full text-sm font-medium rounded-full transition-all duration-300 ${
								page === "register"
									? "bg-gray-100 dark:bg-black text-gray-900 dark:text-white shadow-sm"
									: "text-gray-600 dark:text-white "
							}`}
						>
							S'inscrire
						</button>
					</div>

					{page === "login" && (
						<div className="border border-white/25 border-t-0 shadow-xl rounded-2xl p-6 bg-white dark:bg-gray-900">
							<h1 className="text-2xl font-semibold pb-1.5 dark:text-white">Login</h1>
							<p className="text-sm text-muted-foreground dark:text-white/75 pb-6">
								Entrez votre nom d&apos;utilisateur et mot de passe
							</p>
							<form className="flex flex-col gap-6" action="/api/auth/login" method="POST">
								<div className="flex flex-col gap-2 text-sm font-medium">
									<label htmlFor="username">Nom d&apos;utilisateur</label>
									<input
										type="text"
										name="username"
										className="rounded-md p-2 bg-transparent border border-gray-300 dark:border-gray-600 outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-200 dark:focus-visible:ring-gray-500 shadow-xs transition-colors"
										required
									/>
								</div>
								<div className="flex flex-col gap-2 text-sm font-medium">
									<div className="flex flex-row items-center justify-between">
										<label htmlFor="password">Mot de passe</label>
									</div>
									<input
										type="password"
										name="password"
										className="rounded-md p-2 bg-transparent border border-gray-300 dark:border-gray-600 outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-300 dark:focus-visible:ring-gray-500 shadow-xs transition-colors"
										required
									/>
								</div>
								<input type="hidden" name="redirectTo" value="/" />
								<button
									type="submit"
									className="rounded-md p-2 outline-none bg-black dark:bg-gray-700 text-white text-center cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
								>
									Se connecter
								</button>
							</form>
						</div>
					)}

					{page === "register" && (
						<div className="border border-white/25 border-t-0 shadow-xl rounded-b-2xl rounded-tl-2xl p-6 bg-white dark:bg-gray-900">
							<h1 className="text-2xl font-semibold pb-1.5 dark:text-white">Créer un compte</h1>
							<p className="text-sm text-muted-foreground dark:text-white/75 pb-6">
								Entrez votre nom d&apos;utilisateur et mot de passe
							</p>
							<form className="flex flex-col gap-6" action="/api/auth/register" method="POST">
								<div className="flex flex-col gap-2 text-sm font-medium">
									<label htmlFor="username">Nom d&apos;utilisateur</label>
									<input
										type="text"
										name="username"
										className="rounded-md p-2 bg-transparent border border-gray-300 dark:border-gray-600 outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-200 dark:focus-visible:ring-gray-500 shadow-xs transition-colors"
										required
									/>
								</div>
								<div className="flex flex-col gap-2 text-sm font-medium">
									<div className="flex flex-row items-center justify-between">
										<label htmlFor="password">Mot de passe</label>
									</div>
									<input
										type="password"
										name="password"
										className="rounded-md p-2 bg-transparent border border-gray-300 dark:border-gray-600 outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-300 dark:focus-visible:ring-gray-500 shadow-xs transition-colors"
										required
									/>
								</div>
								<input type="hidden" name="redirectTo" value="/" />
								<button
									type="submit"
									className="rounded-md p-2 outline-none bg-black dark:bg-gray-700 text-white text-center cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
								>
									S'inscrire
								</button>
							</form>
						</div>
					)}
				</div>
			</div>
		</>
  );
}
