import { io } from 'socket.io-client';

// const socketURL = 'http://localhost:4000';
const socketURL =
  process.env.SOCKET_SERVER_URL || 'https://rank-dev.onrender.com';
console.log('SOCKET URL: ', socketURL);

export const socket = io(socketURL, {
  autoConnect: false,
});
