import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TicTacToe",
  description: "TicTacToe is a game where you can play against a friend or other players.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
			<head>
				<link rel="stylesheet" href="https://kit.fontawesome.com/a31e608af5.css" crossOrigin="anonymous" />
			</head>
      <body>
        {children}
      </body>
    </html>
  );
}
