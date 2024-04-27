import Link from "next/link";
import Message from "./Message";
// import { useState } from "react";

const Chat = () => {
  // const [message, setMessage] = useState("");

  return (
    <div className="chat h-screen  md:col-span-1 grid md:grid-rows-12 ">
      <div className="max-[767px]:hidden bg-[#1e1e1e] col-span-1  rounded-xl mb-2 row-span-2 p-5 ">
        <div className="text-sm"> Typescript help</div>
        <Link href={{}} className="text-xs text-gray-300">
          Join the repo
        </Link>
      </div>
      <div className=" bg-[#1e1e1e]  rounded-xl row-span-10  relative p-4 flex justify-center">
        <div className=" absolute bottom-4 w-4/5 ">
          <div>
            <Message
            //  message={message}
            />
          </div>
          <input
            type="text"
            placeholder="send a message"
            className="bg-white w-full rounded mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
