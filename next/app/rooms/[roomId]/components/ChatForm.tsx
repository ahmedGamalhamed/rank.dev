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
import { useGlobalContext } from '@/app/(context)/GlobalContext';

export default function ChatForm({
  roomId,
  initialMessages = [],
}: {
  roomId: string;
  initialMessages: IMessage[];
}) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const messageContainer = useRef<HTMLDivElement | null>(null);
  const { dbUser } = useGlobalContext();

  useEffect(() => {
    socket.on('message', ({ info }: { info: IMessage }) => {
      setMessages((prev) => [...prev, info]);
    });

    return () => {
      socket.off('message');
    };
  }, [roomId, dbUser]);

  useEffect(() => {
    if (messageContainer.current) {
      messageContainer.current.scrollTop =
        messageContainer.current.scrollHeight;
    }
  }, [messages]);

  const onSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      setCurrentMessage('');
      socket.emit('message', {
        text: currentMessage.trim(),
        userId: dbUser!.id,
        userImage: dbUser?.imageUrl,
        roomId,
        ...dbUser,
      });
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
      <form
        onSubmit={onSubmit}
        className="p-2 bottom-0 w-full bg-white dark:bg-black bg-opacity-10 dark:bg-opacity-10 flex gap-2 justify-center items-center"
      >
        <Input
          className="resize-none"
          placeholder="Send a message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button
          className="w-8 h-8 p-2 grid place-content-center rounded-full hover:bg-white hover:bg-opacity-10 hover:scale-105 active:scale-100"
          onClick={onSubmit}
        >
          <SendHorizontal width={'100%'} className="" color="lightblue" />
        </button>
      </form>
    </div>
  );
}
