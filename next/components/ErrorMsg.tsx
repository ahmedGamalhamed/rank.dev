import Image from 'next/image';
import React from 'react';

export default function ErrorMsg({ msg }: { msg: string }) {
  return (
    <div className="flex justify-center gap-2 items-center h-fit animate-pulse">
      <Image
        src={'/images/logo/logo.png'}
        alt={'Logo'}
        height={80}
        width={80}
        className=""
      />
      <h1 className="text-center text-3xl text-fuchsia-500 ">{msg}</h1>
    </div>
  );
}
