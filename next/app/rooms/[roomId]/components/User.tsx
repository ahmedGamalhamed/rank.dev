import Image from 'next/image';

const User: React.FC<{ id: string }> = ({ id }) => {
  if (!id) return null;
  return (
    <div className="py-2 ">
      <div>
        <Image
          width={40}
          height={40}
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white mr-4"
          src={`https://getstream.imgix.net/images/random_svg/${id
            .at(-1)
            ?.toUpperCase()}.svg`}
          alt=""
        />
        <span className="text-sm">user name for id {id}</span>
      </div>
    </div>
  );
};

export default User;
