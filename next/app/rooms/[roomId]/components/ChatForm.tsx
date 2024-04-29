'use client';
import { socket } from '@/app/(socket)/socket';
import { useAuth } from '@clerk/nextjs';
import React, { useEffect, useRef, useState } from 'react';
import { IMessage } from '../page';
import { Input } from '@/components/ui/input';
import Message from './Message';
import { Textarea } from '@/components/ui/textarea';
import { SendHorizontal } from 'lucide-react';
import { IconButton } from '@stream-io/video-react-sdk';

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
  const messageContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    socket.on('message', ({ info }: { info: IMessage }) => {
      setMessages((prev) => [...prev, info]);
    });

    return () => {
      socket.off('message');
    };
  }, [roomId, userId]);

  useEffect(() => {
    if (messageContainer.current) {
      messageContainer.current.scrollTop =
        messageContainer.current.scrollHeight;
    }
  }, [messages]);

  const onSubmit = (
    e:
      | React.KeyboardEvent<HTMLTextAreaElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    //@ts-ignore
    if (e.keyCode && e.keyCode != 13) return;
    if (currentMessage.trim()) {
      socket.emit('message', {
        text: currentMessage.trim(),
        userId,
        roomId,
      });
      setCurrentMessage('');
    }
  };

  return (
    <div className="h-full overflow-auto bg-white bg-opacity-5 flex flex-col">
      <div ref={messageContainer} className="flex-grow overflow-auto ">
        {[...initialMessages, ...messages].map((message) => (
          <div key={message.id} className="p-1 w-full">
            <Message
              message={message}
              // time={new Date(message.createdAt).toTimeString()}
              // userImg=""
              // userName={message.authorId}
            />
          </div>
        ))}
      </div>
      <div className="p-2 bottom-0 w-full bg-white dark:bg-black bg-opacity-10 dark:bg-opacity-10 flex gap-2 justify-center items-center">
        <Textarea
          className="resize-none"
          placeholder="Send a message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={onSubmit}
        />
        <button
          className="w-8 h-8 p-2 grid place-content-center rounded-full hover:bg-white hover:bg-opacity-10 hover:scale-105 active:scale-100"
          onClick={onSubmit}
        >
          <SendHorizontal width={'100%'} className="" color="lightblue" />
        </button>
      </div>
    </div>
  );
}
