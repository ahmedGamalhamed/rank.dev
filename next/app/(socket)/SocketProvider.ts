'use client';

import React, { useEffect } from 'react';
import { socket } from './socket';

export default function SocketProvider() {
  useEffect(() => {
    if (socket.disconnected) {
      socket.connect();
    }

    return () => {
      socket.disconnect();
    };
  }, []);

  return null;
}
