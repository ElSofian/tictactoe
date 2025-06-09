"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
		switch (error) {
			case "1": toast.error("Identifiants incorrects:"); break;
			case "2": toast.error("Entreprise ou employé non trouvé:"); break;
		}
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-white">
			<div className="border border-white/25 shadow-xl rounded-2xl p-6 bg-gray-900">
				<h1 className="text-2xl font-semibold pb-1.5 text-white">Login</h1>
				<p className="text-sm text-white/75 pb-6">Entrez votre nom d&apos;utilisateur et mot de passe</p>
				<form className="flex flex-col gap-6" action="/api/auth/login" method="POST">
					<div className="flex flex-col gap-2 text-sm font-medium">
						<label htmlFor="username">Nom d&apos;utilisateur</label>
						<input type="text" name="username" className="rounded-md p-2 bg-transparent border border-gray-300 outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-200 shadow-xs"  required />
					</div>
					<div className="flex flex-col gap-2 text-sm font-medium">
						<div className="flex flex-row items-center justify-between">
							<label htmlFor="password">Mot de passe</label>
							{/*<a href="/auth/forgot-password" className="ml-24 inline-block font-normal text-sm underline-offset-4 hover:underline">Mot de passe oublié ?</a>*/}
						</div>
						<input type="password" name="password" className="rounded-md p-2 border border-gray-300 outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-300 shadow-xs" required />
					</div>
					<input type="hidden" name="redirectTo" value="/" />
					<button type="submit" className="rounded-md p-2 outline-none bg-gray-700 text-white text-center cursor-pointer">Se connecter</button>
        </form>
			</div>
    </div>
  );
}
