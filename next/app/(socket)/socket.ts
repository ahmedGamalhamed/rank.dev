import { io } from 'socket.io-client';

console.log('SOCKET URL: ', process.env.SOCKET_SERVER_URL);

export const socket = io('https://rank-dev.onrender.com', {
  autoConnect: false,
});
