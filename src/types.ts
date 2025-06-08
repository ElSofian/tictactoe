export interface User {
	id: string;
	username: string;
	hashedPassword: string;
	sessions: Session[];
}

export interface Session {
	id: string;
	userId: string;
	expiresAt: Date;
	user: User;
}

export interface Game {
	id: number;
	player_1: string;
	player_2: string;
	winner: string;
	date: Date;
}