'use client';
import Video from './components/Video';
import { useProtect } from '@/lib/useProtect';
import useJoinRoom from '@/app/rooms/[roomId]/components/actions/useJoinRoom';
import ErrorMsg from '@/components/ErrorMsg';
import RoomInfo from './components/RoomInfo';
import ChatForm from './components/ChatForm';
import Participants from './components/Participants';
import { usePathname } from 'next/navigation';

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
  };
}

export interface IMessage {
  id: string;
  text: string;
  authorId: string;
  createdAt: number;
}

const Room = ({ params }: IProps) => {
  const pathname = usePathname();
  const dialog = useProtect(pathname);
  const { roomId } = params;
  const { joinError, joinData } = useJoinRoom(roomId);

  if (dialog) return dialog;
  if (joinError) return <ErrorMsg msg={joinError} />;

  return (
    <section className="relative w-full max-w-7xl mx-auto py-4">
      <div className="grid grid-cols-12 gap-4 ">
        <div className="video rounded-lg col-span-12 md:col-span-9 h-fit  bg-white bg-opacity-5 ">
          <Video roomId={roomId} />
          <div className="p-4">
            <div className="mb-4">
              <RoomInfo info={joinData} />
            </div>
            <Participants />
          </div>
        </div>
        <div className="chat  col-span-12 md:col-span-3 min-h-56">
          <ChatForm
            roomId={roomId}
            initialMessages={joinData?.messages || []}
          />
        </div>
      </div>
    </section>
  );
};

export default Room;
