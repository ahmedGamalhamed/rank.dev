import { Github, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className=" ">
      <div className="container py-10 flex justify-between items-center border-y-2 flex-wrap">
        <div className=" flex justify-center items-center w-full  sm:w-auto lg:w-1/5">
          <Link href="/" className="flex items-center ">
            <Image
              src={'/images/logo/logo.png'}
              alt={'Logo'}
              height={60}
              width={60}
            />
            <span className="ml-2 text-xl font-semibold ">Rank.Dev</span>
          </Link>
        </div>

        <ul className="flex items-center justify-center text-sm font-semibold flex-col gap-3 my-5 sm:my-0 lg:flex-row w-full  sm:w-auto lg:w-3/5 ">
          <li className="mr-4 ">Terms Of Service</li>
          <li className="mr-4 "> Privacy Policy</li>
          <li className="mr-4 "> Community Guidelines</li>
          <li> Refund Policy</li>
        </ul>

        <ul className=" flex items-center justify-center w-full  sm:w-auto lg:w-1/5">
          <li className="mr-5 cursor-pointer p-2 rounded bg-slate-100 dark:bg-white text-black dark:hover:bg-slate-300 hover:bg-slate-200 transition duration-300">
            <Instagram className="w-5 h-5" />
          </li>
          <li className="mr-5 cursor-pointer p-2 rounded bg-slate-100 dark:bg-white text-black dark:hover:bg-slate-300 hover:bg-slate-200 transition duration-300 ">
            <Twitter className="w-5 h-5" />
          </li>
          <li className=" cursor-pointer p-2 rounded bg-slate-100 dark:bg-white text-black dark:hover:bg-slate-300 hover:bg-slate-200 transition duration-300">
            <Github className="w-5 h-5" />
          </li>
        </ul>
      </div>
      <div>
        <p className="text-center font-semibold text-sm py-5">
          All rights reserved. Rank.Dev LTD.
        </p>
      </div>
    </footer>
  );
}
