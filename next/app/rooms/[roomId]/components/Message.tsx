import Image from 'next/image';
import { IMessage } from '../page';
import Link from 'next/link';

const Message = ({ message }: { message: IMessage }) => {
  return (
    <div className="flex items-start gap-2 py-4 px-2 bg-white bg-opacity-5 rounded-md">
      <div className="w-6 h-6">
        <abbr
          title={`${message.authorId} - ${new Date(
            message.createdAt
          ).toLocaleString()}`}
          className="no-underline"
        >
          <Link href={`/users/${message.authorId}`} className="">
            <Image
              width={40}
              height={40}
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src={message.userImage}
              alt=""
            />
          </Link>
        </abbr>
      </div>
      <div className="text-sm break-words whitespace-break-spaces w-5/6 mx-auto">
        <div className="flex justify-between">
          <span className="font-bold text-fuchsia-500">{message.fullName}</span>
          <span className="text-xs  text-slate-200 italic">
            {new Date(message.createdAt).toLocaleTimeString()}
          </span>
        </div>

        <div className="mt-2">{message.text}</div>
      </div>
    </div>
  );
};

export default Message;
