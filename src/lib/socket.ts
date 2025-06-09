import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

const url = process.env.NODE_ENV === 'production' ? 'https://ttt.sofianelaloui.me' : `http://localhost:${process.env.SOCKET_PORT}`;

export function getSocket(): Socket {
  if (!socket) {
    socket = io(url, {
      autoConnect: true,
      reconnection: false,
    });
  }
  return socket;
}
