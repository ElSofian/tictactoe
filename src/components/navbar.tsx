"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar({ inGame }: { inGame: boolean }) {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		if (typeof window === 'undefined') return;
		
		const savedTheme = localStorage.getItem("theme") || "light";
		setTheme(savedTheme);
		document.documentElement.classList.toggle("dark", savedTheme === "dark");
	}, []);

	const toggleTheme = () => {
		if (typeof window === 'undefined') return;

		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	}

	return (
		<div className="absolute top-4 right-4 dark:text-white">
			<div className="flex items-center gap-4">
				<i className={`fa-regular ${theme === "light" ? "fa-moon" : "fa-sun-bright"} fa-lg dark:text-white cursor-pointer`} onClick={toggleTheme} />
				{!inGame && (
					<Link href="/api/auth/logout" prefetch={false}>
						<i className="fa-solid fa-right-from-bracket fa-md" />
					</Link>
				)}
			</div>
		</div>
	)
}