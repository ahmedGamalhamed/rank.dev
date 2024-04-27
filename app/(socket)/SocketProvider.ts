"use client";

import React, { useEffect } from "react";
import { socket } from "./socket";

export default function SocketProvider() {
  useEffect(() => {
    console.log("Connecting");
    if (socket.disconnected) {
      socket.connect();
    }

    return () => {
      console.log("Disconnecting");
      socket.disconnect();
    };
  }, []);

  return null;
}
