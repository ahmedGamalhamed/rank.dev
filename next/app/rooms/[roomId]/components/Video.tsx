'use client';

import { VideoIO } from './VideoIO';

const Video = ({ roomId }: { roomId: string }) => {
  return (
    <div className="aspect-video w-full md:h-[70vh] h-[60vh]  rounded-t-lg">
      <VideoIO roomId={roomId} />
    </div>
  );
};

export default Video;
