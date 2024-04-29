import { io } from 'socket.io-client';

const socketURL = process.env.SOCKET_SERVER_URL || 'http://localhost:4000';
console.log('SOCKET URL: ', socketURL);

export const socket = io(socketURL, {
  autoConnect: false,
});
