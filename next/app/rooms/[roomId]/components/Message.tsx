import Image from 'next/image';
import { IMessage } from '../page';
import Link from 'next/link';

const Message = ({ message }: { message: IMessage }) => {
  return (
    <abbr
      title={`${message.authorId} - ${new Date(
        message.createdAt
      ).toLocaleString()}`}
      className="no-underline"
    >
      <Link href={`/users/${message.authorId}`} className="my-2">
        <Image
          width={40}
          height={40}
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white mr-4"
          src={`https://getstream.imgix.net/images/random_svg/${message.authorId
            .at(-1)
            ?.toUpperCase()}.svg`}
          alt=""
        />
        <span className="text-sm">{message.text}</span>
      </Link>
    </abbr>
  );
};

export default Message;
