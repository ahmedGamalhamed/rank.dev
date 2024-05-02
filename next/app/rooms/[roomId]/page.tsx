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

interface IProps {
  params: {
    roomId: string;
  };
}

export interface IJoinRoomResponse {
  id: string;
  messages: IMessage[];
  roomInfo: {
    ownerId: string;
    id: string;
    createdAt: number;
    roomData: {
      repo: string;
      roomDescription: string;
      roomName: string;
      tags: string;
      roomLevel: string;
    };
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
  if (dialog) return dialog;
  if (joinError) return <ErrorMsg msg={joinError} />;

  return (
    <section className="w-full max-w-7xl mx-auto py-4 relative">
      <div className="grid grid-cols-12 gap-4">
        <div className="video col-span-12 md:col-span-9 h-fit  bg-white bg-opacity-5 rounded-lg overflow-clip">
          <div className="aspect-video w-full md:h-[90vh] h-[60vh]  rounded-t-lg">
            <VideoIO roomId={roomId} />
          </div>
          <div className="p-4">
            <Participants />
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 flex flex-col gap-1">
          <div className="bg-white bg-opacity-5 p-4 mb-4 rounded-lg">
            <RoomInfo info={joinData} />
          </div>
          <div className="max-h-[80vh] flex-grow sticky bottom-0">
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
