import Video from '@/app/singleroom/components/room/Video';
import Chat from '@/app/singleroom/components/room/Chat';

const Room = () => {
  return (
    <div className="h-screen  mx-6 mt-10 mb-16 grid md:grid-cols-4 gap-3 ">
      <Video />
      <Chat />
    </div>
  );
};

export default Room;
