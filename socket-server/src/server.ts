import express, { Request, Response } from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import { socket_room_table, socket_user_table } from "./tables";
import { Message } from "./Message";
import { Room } from "./Room";

const app = express();
const server = createServer(app);
export const io = new Server(server, {
  cors: {
    origin: [process.env.SERVER_URL! || "", "http://localhost:3000"],
  },
});

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  const data = Object.values(Room.roomList).filter(
    (room) => Object.values(room.participatns).length > 0
  );

  res.send({ data });
});

io.on("connection", (socket) => {
  const socketId = socket.id;
  console.log("+ socketId: ", socketId);

  socket.on("createRoom", ({ userId, user, ...rest }, sendResponse) => {
    const room = new Room({ ownerId: userId, ...rest });
    Room.joinUser(room.id, userId, user, socket);
    sendResponse({ roomId: room.id });
  });

  socket.on("joinRoom", ({ userId, roomId, user }, sendResponse) => {
    const room = Room.joinUser(roomId, userId, user, socket);
    if ("error" in room) return sendResponse({ error: room.error });
    sendResponse({ data: room.data });
    Room.updateStatus(roomId);
  });

  socket.on("closeRoom", ({ roomId }) => {
    io.in(roomId).emit("roomClosed");
    io.in(roomId).socketsLeave(roomId);
    delete Room.roomList[roomId];
  });

  socket.on("leaveRoom", () => {
    Room.kickBySocket(socket);
  });

  socket.on("message", ({ userId, roomId, text, ...rest }) => {
    const message = new Message({ text, roomId, authorId: userId, ...rest });
    io.to(roomId).emit("message", message);
  });

  socket.on("disconnect", (reason) => {
    console.log(`- socketId: `, socketId);
    Room.kickBySocket(socket);
  });
});

server.listen(process.env.PORT || 4000, () => {
  setInterval(() => {
    const data = Object.values(Room.roomList).filter(
      (room) => Object.values(room.participatns).length > 0
    );
    io.emit("roomsData", data);
  }, 5000);

  console.log("listening on *:4000");
});
