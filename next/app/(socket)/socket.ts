import { io } from 'socket.io-client';

const socketURL = 'http://localhost:4000';
console.log('SOCKET URL: ', socketURL);

export const socket = io(socketURL, {
  autoConnect: false,
});
