"use client";
import { socket } from "@/app/(socket)/socket";
import React, { useEffect, useRef, useState } from "react";

interface IJoinRoomResponse {
  id: string;
  messages: IMessage[];
  roomInfo: {
    ownerId: string;
    id: string;
    createdAt: number;
  };
}

interface IMessage {
  id: string;
  text: string;
  authorId: string;
}

export default function ChatForm({ roomId, userId }: { roomId: string; userId: string }) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [usersCount, setUsersCount] = useState(1);
  const [error, setError] = useState("");
  const sent = useRef(false);
  useEffect(() => {
    if (!sent.current) {
      sent.current = true;
      socket.emit("joinRoom", { roomId, userId }, (response: any) => {
        console.log(response);
        if ("data" in response) {
          console.log(response.data.messages);
          setMessages(response.data.messages);
        } else if ("error" in response) {
          setError(response.error);
        }
      });
    }

    socket.on("message", ({ info }: { info: IMessage }) => {
      setMessages((prev) => [...prev, info]);
    });

    socket.on("status", (data: { count: string }) => {
      console.log("status", data);
      setUsersCount(+data.count);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <h1>
        ChatForm <span>Count {usersCount}</span>
      </h1>
      <div>
        {messages.map((message) => (
          <div key={message.id} className='p-4 bg-white bg-opacity-10 my-2'>
            <small className='text-red-500 mr-4'>{message.authorId}</small>
            <p className={`${message.authorId == "system" ? "text-sm text-gray-500" : ""}`}>{message.text}</p>
          </div>
        ))}
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            socket.emit("message", {
              text: currentMessage,
              userId,
              roomId,
            });
            setCurrentMessage("");
          }}
        >
          <input placeholder='send a message...' className='w-full p-2' type='text' value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
        </form>
      </div>
    </div>
  );
}
