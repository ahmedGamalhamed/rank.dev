"use client";
import { socket } from "@/app/(socket)/socket";
import { useRouter } from "next/navigation";
import React from "react";

export default function RoomForm({ userId }: { userId: string }) {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={(e) => {
          socket.emit("createRoom", { userId }, (response: { roomId: string }) => {
            router.push(`/rooms/${response.roomId}`);
          });
        }}
      >
        Create a new Room
      </button>
    </div>
  );
}
