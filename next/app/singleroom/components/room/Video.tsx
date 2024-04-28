import Link from "next/link";
import User from "./User";

const participants = [{ id: 1 }, { id: 2 }];

const Video = () => {
  return (
    <div className="video  h-screen  md:col-span-3 max-[767px]:grid grid-rows-10 gap-3">
      <div className="max-[767px]:block min-[768px]:hidden bg-[#1e1e1e] py-5  rounded-xl px-3  row-span-2">
        <div className="text-sm"> Typescript help</div>
        <Link href={{}} className="text-xs text-gray-300">
          Join the repo
        </Link>
      </div>
      <div className=" min-[768px]:h-screen bg-[#1e1e1e] rounded-xl p-4 row-span-8 grid grid-rows-12">
        <div className=" bg-cyan-900 row-span-9 max-[767px]:row-span-8">
          video
        </div>
        <div className="participants row-span-3 max-[767px]:row-span-4">
          <h6 className="my-3">participants [2]</h6>
          {participants.map((p) => (
            <User id={p.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
