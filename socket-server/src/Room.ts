import { v4 as uuidv4, validate } from "uuid";
import { io } from "./server";
import { Socket } from "socket.io";
import { socket_room_table, socket_user_table, user_socket_table } from "./tables";

export interface IMessage {
  roomId: string;
  text: string;
  authorId: string;
  userImage: string;
  fullName: string;
  createdAt: number;
  id: string;
}

export interface _IRoom {
  id: string;
  messages: IMessage[];
  roomInfo: {
    ownerId: string;
    ownerFullName: string;
    ownerImageUrl: string;
    roomData: {
      roomName: string;
      roomDescription: string;
      repo: string;
      tags: string[];
      roomLevel: number;
      maximumParticipants: number;
    };
    id: string;
    createdAt: number;
  };
  participatns: Record<
    string,
    {
      authId: string;
      isAdmin: boolean;
      fullName: string;
      imageUrl: string;
      followers: any[];
      following: any[];
      technologies: any[];
      socials: any[];
      createdAt: Date;
      updatedAt: Date;
      id: string;
    }
  >;
}

export class Room {
  static roomList: { [k: string]: _IRoom } = {};
  public id: string;
  public messages = [];
  public roomInfo = {} as _IRoom["roomInfo"];
  public participatns = {};

  constructor(info: _IRoom["roomInfo"]) {
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

  static leaveUser(roomId: string, userId: string, socket: Socket) {
    const room = this.getById(roomId);
    if (!room) return { error: "This room doesnt exist" };
    delete room.participatns[userId];
    socket.leave(roomId);
    this.updateStatus(roomId);
  }

  static joinUser(roomId: string, userId: string, user: _IRoom["participatns"][""], socket: Socket) {
    socket_user_table[socket.id] = userId;
    socket_room_table[socket.id] = roomId;
    user_socket_table[userId] = socket.id;
    const room = this.getById(roomId);

    if (!room) return { error: "This room doesn't exist" };
    const roomSize = this.getSocketRoom(socket.id)!.size;
    if (roomSize >= +room.roomInfo.roomData.maximumParticipants) return { error: "Room is at Maximum Capacity" };

    // room.participatns.push(userId);
    room.participatns[userId] = user;
    socket.join(roomId);
    this.updateStatus(roomId);

    return { data: room };
  }

  static updateStatus(roomId: string) {
    const socketRoom = this.getSocketRoom(roomId);
    const clientsCount = socketRoom?.size || 0;
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
    Room.leaveUser(roomId, userId, socket);
    delete socket_user_table[socket.id];
    delete socket_room_table[socket.id];
  }
}
