import { io } from 'socket.io-client';

console.log('SOCKET URL: ', process.env.SOCKET_SERVER_URL);

export const socket = io(process.env.SOCKET_SERVER_URL!, {
  autoConnect: false,
});
