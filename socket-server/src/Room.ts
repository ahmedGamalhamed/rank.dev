import { v4 as uuidv4, validate } from "uuid";
import { IMessage } from "./Message";
import { io } from "./server";
import { Socket } from "socket.io";
import { socket_room_table, socket_user_table } from "./tables";
interface IRoom {
  id?: string;
  ownerId: string;
  createdAt?: number;
  level?: number;
  userLimit?: number;
  title?: string;
  description?: string;
}

export class Room {
  static roomList: { [k: string]: InstanceType<typeof Room> } = {};
  public id: string;
  public messages: IMessage[] = [];
  public roomInfo = {} as IRoom;
  public participatns = {} as { [k: string]: Record<string, string> };

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
    delete room.participatns[userId];
    socket.leave(roomId);
    this.updateStatus(roomId);
  }
  static joinUser(roomId: string, userId: string, user: Record<string, string>, socket: Socket) {
    socket_user_table[socket.id] = userId;
    socket_room_table[socket.id] = roomId;
    const room = this.getById(roomId);
    if (!room) return { error: "This room doesnt exist" };
    // room.participatns.push(userId);
    room.participatns[userId] = user;
    socket.join(roomId);
    this.updateStatus(roomId);

    return { data: room };
  }

  static updateStatus(roomId: string) {
    const socketRoom = this.getSocketRoom(roomId);
    const clientsCount = socketRoom?.size || 0;
    const clients = Array.from(socketRoom?.values() || []).map((id) => socket_user_table[id]);
    const room = Room.getById(roomId);
    if (!room) return;
    io.to(roomId).emit("status", {
      count: clientsCount,
      clients: Object.values(room.participatns).map((user) => ({
        id: user.id,
        fullName: user.fullName,
        imageUrl: user.imageUrl,
      })),
    });
  }

  static kickBySocket(socket: Socket) {
    const userId = socket_user_table[socket.id];
    const roomId = socket_room_table[socket.id];
    Room.kickUser(roomId, userId, socket);
    delete socket_user_table[socket.id];
    delete socket_room_table[socket.id];
  }
}
