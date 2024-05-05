'use client';
import { useProtect } from '@/lib/useProtect';
import useJoinRoom from '@/app/rooms/[roomId]/components/actions/useJoinRoom';
import ErrorMsg from '@/components/ErrorMsg';
import RoomInfo from './components/RoomInfo';
import ChatForm from './components/ChatForm';
import { usePathname } from 'next/navigation';
import { VideoIO } from './components/VideoIO';
import { User } from '@/app/(db)/Schema';
import Participants from './components/Participants';
import { useGlobalContext } from '@/app/(context)/GlobalContext';
import { useEffect } from 'react';
import { socket } from '@/app/(socket)/socket';

interface IProps {
  params: {
    roomId: string;
  };
}

export interface IMessage extends Omit<User, 'createdAt'> {
  id: string;
  text: string;
  authorId: string;
  userImage: string;
  createdAt: number;
}

const Room = ({ params }: IProps) => {
  const pathname = usePathname();
  const { roomId } = params;
  const dialog = useProtect(pathname);
  const { joinError, joinData } = useJoinRoom(roomId);
  const { signedUser } = useGlobalContext();

  if (dialog) return dialog;
  if (joinError)
    return (
      <div className="h-[80vh] grid place-content-center">
        <ErrorMsg msg={joinError} />
      </div>
    );

  return (
    <section className="w-full max-w-7xl mx-auto py-4 relative">
      <div className="bg-white bg-opacity-5 p-4 mb-4 rounded-lg">
        <RoomInfo info={joinData} />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="video col-span-12 md:col-span-9 h-fit  bg-white bg-opacity-5 rounded-lg overflow-clip">
          <div className="aspect-video w-full md:h-[70vh] h-[60vh]  rounded-t-lg">
            <VideoIO roomData={joinData} />
          </div>
          <div className="p-4">
            <Participants roomData={joinData} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 flex flex-col gap-1">
          <div className="max-h-[75h] flex-grow flex flex-col">
            <ChatForm
              roomId={roomId}
              initialMessages={joinData?.messages || []}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Room;
