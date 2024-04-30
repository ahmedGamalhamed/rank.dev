import { io } from 'socket.io-client';
import { Variables } from '../Variables';

const socketURL = Variables.SOCKET_URL;
console.log(socketURL);

export const socket = io(socketURL, {
  autoConnect: false,
});
