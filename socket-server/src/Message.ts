import { v4 as uuidv4 } from "uuid";
import { Room } from "./Room";
export interface IMessage {
  id?: string;
  authorId: string;
  text: string;
  createdAt?: number;
  roomId: string;
}

export class Message {
  public info = {} as IMessage;
  constructor(data: IMessage) {
    this.info = {
      ...data,
      createdAt: new Date().getTime(),
      id: uuidv4(),
    };

    const room = Room.roomList[data.roomId];
    room.messages.push(this.info);
  }
}
