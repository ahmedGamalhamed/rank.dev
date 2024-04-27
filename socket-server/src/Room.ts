import { v4 as uuidv4, validate } from "uuid";
import { IMessage } from "./Message";
import { io } from "./server";
import { Socket } from "socket.io";
import { socket_room_table, socket_user_table } from "./tables";
interface IRoom {
  id?: string;
  ownerId: string;
  createdAt?: number;
}

export class Room {
  static roomList: { [k: string]: InstanceType<typeof Room> } = {};
  public id: string;
  public messages: IMessage[] = [];
  public roomInfo = {} as IRoom;

  constructor(info: IRoom) {
    this.id = uuidv4();
    this.roomInfo = {
      ...info,
      id: this.id,
      createdAt: new Date().getTime(),
    };
    Room.roomList[this.id] = this;
  }

  static getById(roomId: string) {
    return Room.roomList[roomId];
  }

  static getSocketRoom(roomId: string) {
    return io.sockets.adapter.rooms.get(roomId);
  }

  static kickUser(roomId: string, userId: string, socket: Socket) {
    const room = this.getById(roomId);
    if (!room) return { error: "This room doesnt exist" };

    socket.leave(roomId);
    this.updateStatus(roomId);
  }
  static joinUser(roomId: string, userId: string, socket: Socket) {
    socket_user_table[socket.id] = userId;
    socket_room_table[socket.id] = roomId;
    const room = this.getById(roomId);
    if (!room) return { error: "This room doesnt exist" };

    // room.participatns.push(userId);
    socket.join(roomId);
    this.updateStatus(roomId);

    return { data: room };
  }

  static updateStatus(roomId: string) {
    const socketRoom = this.getSocketRoom(roomId);
    const clientsCount = socketRoom?.size || 0;
    const clients = Array.from(socketRoom?.values() || []).map((id) => socket_user_table[id]);

    io.to(roomId).emit("status", {
      count: clientsCount,
      clients,
    });
  }
}
