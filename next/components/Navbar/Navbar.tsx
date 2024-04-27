'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react';
import { Search, X, AlignJustify } from 'lucide-react';
import { Switch } from '../ui/switch';
import { ModeToggle } from '../themeSwitcher';
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  useAuth,
} from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const buttonCN =
    '  border-black dark:border-black lg:block cursor-pointer border-2 lg:border-black lg:dark:border-white rounded-full border-inherit text-sm font-semibold py-1 px-3 uppercase hover:scale-105 active:scale-100 transition duration-200';

  const UnAuthed = () => (
    <div className="flex gap-2">
      <SignUpButton mode="modal">
        <button className={buttonCN}>Sign-up</button>
      </SignUpButton>
      <SignInButton mode="modal">
        <button className={buttonCN}>Sign-In</button>
      </SignInButton>
    </div>
  );

  const Authed = () => (
    <div>
      <div className="flex gap-2">
        <button
          // className="btn btn-outline-primary btn-sm hidden lg:inline-block rounded-xl"
          className={`   ${buttonCN}`}
        >
          Create Room
        </button>
        <SignOutButton>
          <button className={buttonCN}>Sign-out</button>
        </SignOutButton>
      </div>
    </div>
  );

  return (
    <header
      suppressHydrationWarning
      className="  transition-colors duration-300 z-30 sticky top-0 bg-slate-100  dark:bg-black py-2 shadow-md dark:text-white "
    >
      <nav className="px-2  sm:container flex justify-between items-center ">
        <div className="w-fit ">
          <Link href="/" className="h-18 flex items-center ">
            <Image
              src={'/images/logo/logo.png'}
              alt={'Logo'}
              height={40}
              width={40}
            />
            <span className="ml-2 text-lg sm:text-xl font-semibold ">
              Rank.Dev
            </span>
          </Link>
        </div>
        {/* routes */}
        <ul
          className={`
          transition-transform ease-in-out
          ${isOpen ? 'translate-x-0 duration-300' : 'translate-x-80'}
          lg:duration-0 
          fixed top-0 right-0 h-screen w-80 z-50 shadow-2xl
          lg:static lg:h-auto lg:w-auto lg:shadow-none
          flex flex-col items-start justify-start text-black 
          lg:flex-row lg:items-center 
          lg:translate-x-0
          lg:flex
          bg-slate-100 lg:bg-transparent order-3 pt-14 lg:pt-0 pb-6 lg:order-1 lg:space-x-2 lg:pb-0 xl:space-x-4 font-semibold overflow-hidden
        `}
        >
          <li className="w-full pl-5 hover:bg-gray-200 lg:pl-0 lg:w-auto lg:hover:bg-transparent py-3 px-2  opacity-100 hover:opacity-100 hover:scale-105 active:scale-100 transition duration-200">
            <Link className="w-full block  " href="/">
              Home
            </Link>
          </li>
          <li className="w-full pl-5 hover:bg-gray-200 lg:pl-0 lg:w-auto lg:hover:bg-transparent py-3  px-2  opacity-80 hover:opacity-100 hover:scale-105 active:scale-100 transition duration-200">
            <Link className="w-full block  " href="/">
              Blog
            </Link>
          </li>
          <li className="w-full pl-5 hover:bg-gray-200 lg:pl-0 lg:w-auto lg:hover:bg-transparent py-3  px-2  opacity-80 hover:opacity-100 hover:scale-105 active:scale-100 transition duration-200">
            <Link className="w-full block  " href="/">
              About
            </Link>
          </li>
          <li className="w-full pl-5 hover:bg-gray-200 lg:pl-0 lg:w-auto lg:hover:bg-transparent py-3  px-2  opacity-80 hover:opacity-100 hover:scale-105 active:scale-100 transition duration-200">
            <Link className="w-full block  " href="/">
              Contact
            </Link>
          </li>
          <li className="w-full pl-5 hover:bg-gray-200 lg:pl-0 lg:w-auto lg:hover:bg-transparent lg:hidden py-3  px-2  opacity-80 hover:opacity-100 hover:scale-105 active:scale-100 transition duration-200">
            {userId ? <Authed /> : <UnAuthed />}
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-4 close lg:hidden  cursor-pointer   "
          >
            <X className="first:w-8 first:h-8" />
          </li>
        </ul>
        <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0  ">
          <Link
            href="/"
            className="h-9 flex items-center mr-2 sm:mr-5 border-r border-border pr-2 sm:pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white"
          >
            <Search />
          </Link>
          {/* <Link
            href="/"
            className=" mr-5 inline-block border-r border-border pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white"
          >
            <Switch id="airplane-mode" />
          </Link> */}
          <div className=" h-9 mr-2 sm:mr-5 inline-block border-r border-border pr-2 sm:pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white">
            <ModeToggle />
          </div>
          <div className="hidden lg:block">
            {userId ? <Authed /> : <UnAuthed />}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            // className="btn btn-outline-primary btn-sm hidden lg:inline-block rounded-xl"
            className="lg:hidden "
          >
            <AlignJustify className="first:w-9 first:h-9  sm:first:w-10 sm:first:h-10 cursor-pointer" />
          </button>
        </div>
      </nav>
    </header>
  );
}
