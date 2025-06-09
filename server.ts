import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { prisma } from './src/lib/prisma';

const PORT = Number(process.env.SOCKET_PORT) || 3800;
const app = express();

app.use(cors({
	origin: 'http://localhost:3000'
}));

const server = createServer(app);

const io = new Server(server, {
  cors: { origin: 'http://localhost:3000', methods: ['GET','POST'] }
});

type WaitingUser = {
	id: string;
	socketId: string;
	username: string;
};

type GameRoom = {
	Xsocket: string;
	Osocket: string;
	Xid: string;
	Oid: string;
	ended: boolean
};

let waitingUser: WaitingUser | null = null;
const gameRooms = new Map<string, GameRoom>();

io.on('connection', socket => {

  socket.on('joinMatchmaking', async ({ user }: { user: { id: string; username: string } }) => {
    const current: WaitingUser = { id: user.id, socketId: socket.id, username: user.username };

    if (waitingUser && waitingUser.id !== current.id) {
      const first  = waitingUser;
      const second = current;

      try {
        const game = await prisma.games.create({
          data: { player_1: first.id, player_2: second.id }
        });
        const gameId = game.id.toString();

        socket.join(gameId);
        io.sockets.sockets.get(first.socketId)?.join(gameId);

        gameRooms.set(gameId, {
          Xsocket: first.socketId,
          Osocket: second.socketId,
          Xid: first.id,
          Oid: second.id,
          ended: false
        });

        io.to(first.socketId).emit('matchFound', {
          gameId,
          symbol: 'X',
          opponent: second.username
        });
        io.to(second.socketId).emit('matchFound', {
          gameId,
          symbol: 'O',
          opponent: first.username
        });
      } catch (err) {
        console.error('❌ Error creating game:', err);
      } finally {
        waitingUser = null;
      }
    } else {
      waitingUser = current;
    }
  });

  socket.on('leaveMatchmaking', () => {
    if (waitingUser?.socketId === socket.id) waitingUser = null;
  });

  socket.on('joinGame', ({ gameId, symbol }: { gameId: string; symbol: 'X'|'O' }) => {
    const room = gameRooms.get(gameId);

    if (
      (symbol !== 'X' && symbol !== 'O') || !room || room.ended ||
      (symbol === 'X' && socket.id !== room.Xsocket) ||
      (symbol === 'O' && socket.id !== room.Osocket)
    ) {
      socket.emit('redirectHome');
      return;
    }

    socket.join(gameId);
  });

  for (const evt of ['move','turn'] as const) {
    socket.on(evt, (data: any) => {
      const room = gameRooms.get(data.gameId);

      if (!room || room.ended) {
        socket.emit('redirectHome');
        return;
      }

      io.in(data.gameId).emit(evt, data);
    });
  }

  socket.on('winner', async ({ gameId, winner }: { gameId: string; winner: 'X'|'O' }) => {
    const room = gameRooms.get(gameId);
    if (room && !room.ended) {
      room.ended = true;
      const winnerId = winner === 'X' ? room.Xid : room.Oid;

			await prisma.games.update({
        where: { id: Number(gameId) },
        data: { winner: winnerId }
      });

      io.in(gameId).emit('winner', { winner });
      io.in(gameId).emit('gameEnded', { winner });
    }
  });

  socket.on('draw', async ({ gameId }: { gameId: string }) => {
    const room = gameRooms.get(gameId);
    if (room && !room.ended) {
      room.ended = true;

      await prisma.games.update({
        where: { id: Number(gameId) },
        data: { winner: null }
      });

      io.in(gameId).emit('draw');
      io.in(gameId).emit('gameEnded', { draw: true });
    }
  });

  socket.on('disconnect', async () => {
    console.log('🔌 User disconnected:', socket.id);

    if (waitingUser?.socketId === socket.id) {
      waitingUser = null;
    }

    for (const [gameId, room] of gameRooms.entries()) {
      if (!room.ended && (socket.id === room.Xsocket || socket.id === room.Osocket)) {
        room.ended = true;

        const winnerSymbol = socket.id === room.Xsocket ? 'O' : 'X';
        const winnerId     = winnerSymbol === 'X' ? room.Xid : room.Oid;

        await prisma.games.update({
          where: { id: Number(gameId) },
          data: { winner: winnerId }
        });

        const remainingSocket = socket.id === room.Xsocket ? room.Osocket : room.Xsocket;
        io.to(remainingSocket).emit('winner', { winner: winnerSymbol });
        io.to(remainingSocket).emit('gameEnded', { winner: winnerSymbol, abandoned: true });

        gameRooms.delete(gameId);
      }
    }
  });

});

server.listen(PORT, () => {
  console.log(`🚀 Socket server listening on port ${PORT}`);
});
