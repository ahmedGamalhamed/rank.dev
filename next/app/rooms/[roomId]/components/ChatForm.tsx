'use client';
import { socket } from '@/app/(socket)/socket';
import { useAuth } from '@clerk/nextjs';
import React, { useEffect, useRef, useState } from 'react';
import { IMessage } from '../page';
import { Input } from '@/components/ui/input';
import Message from './Message';

export default function ChatForm({
  roomId,
  initialMessages = [],
}: {
  roomId: string;
  initialMessages: IMessage[];
}) {
  const { userId } = useAuth();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    socket.on('message', ({ info }: { info: IMessage }) => {
      setMessages((prev) => [...prev, info]);
    });

    return () => {
      socket.off('message');
    };
  }, [roomId, userId]);

  return (
    <div className="bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 md:h-[80vh] h-[50vh] overflow-auto flex flex-col rounded-lg">
      <div className="overflow-auto flex-grow sticky bottom-0 p-2">
        {[...initialMessages, ...messages].map((message) => (
          <div key={message.id} className="mb-2 p-1">
            <Message message={message} key={message.id} />
          </div>
        ))}
      </div>
      <div className="sticky bottom-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            socket.emit('message', {
              text: currentMessage,
              userId,
              roomId,
            });
            setCurrentMessage('');
          }}
        >
          <Input
            placeholder="Send a message..."
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
