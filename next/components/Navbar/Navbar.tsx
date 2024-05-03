'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { X, AlignJustify } from 'lucide-react';
import { ModeToggle } from '../themeSwitcher';
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  useAuth,
} from '@clerk/nextjs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useGlobalContext } from '@/app/(context)/GlobalContext';
import { CreateRoomForm } from '../Createroom/CreateRoomForm';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { signedUser, userLoaded } = useGlobalContext();

  const [showCreateRoomForm, setShowCreateRoomForm] = useState(false);

  const buttonCN =
    '  border-black lg:block cursor-pointer border-2 rounded-full text-sm font-semibold py-1 px-3 uppercase hover:scale-105 active:scale-100 transition duration-200 hover:bg-fuchsia-600';

  const UnAuthed = () => {
    return (
      <div className="flex gap-2">
        <SignUpButton mode="modal">
          <button className={`${buttonCN} border-black dark:border-white `}>
            Sign-up
          </button>
        </SignUpButton>
        <SignInButton mode="modal">
          <button className={`${buttonCN} border-fuchsia-500`}>Sign-In</button>
        </SignInButton>
      </div>
    );
  };

  const Authed = () => {
    return (
      <div>
        <div className="flex gap-2 justify-center">
          <button
            onClick={(e) => {
              setShowCreateRoomForm(!showCreateRoomForm);
            }}
            className={`${buttonCN}  dark:text-fuchsia-200 dark:border-fuchsia-200 border-fuchsia-500`}
          >
            Create Room
          </button>
          <span className="grid place-content-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={signedUser!.imageUrl} />
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-4 flex-col flex gap-2 bg-opacity-5 dark:bg-opacity-5 dark:bg-black bg-white backdrop-blur ">
                <p className="text-center text-fuchsia-500 mb-2 px-2 font-bold">
                  {signedUser!.fullName}
                </p>

                {signedUser!.isAdmin && (
                  <Link
                    href={`/admin`}
                    className={`${buttonCN} border-black dark:border-white mx-auto`}
                  >
                    Admin Panel
                  </Link>
                )}
                <Link
                  href={`/profile/${signedUser!.id}`}
                  className={`${buttonCN} border-black dark:border-white mx-auto`}
                >
                  Your Profile
                </Link>

                <SignOutButton>
                  <span
                    className={`${buttonCN} border-black dark:border-white mx-auto`}
                  >
                    Sign-out
                  </span>
                </SignOutButton>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
        </div>
      </div>
    );
  };

  return (
    <header
      suppressHydrationWarning
      className="  transition-colors duration-300 z-30 sticky top-0 bg-slate-100  dark:bg-black bg-opacity-70 dark:bg-opacity-70 backdrop-blur py-2 shadow-md dark:text-white "
    >
      <nav className="px-2  sm:container flex justify-between items-center ">
        <div className="w-fit ">
          <Link href="/" className="h-18 flex items-center">
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
          dark:text-white
          transition-transform ease-in-out
          ${isOpen ? 'translate-x-0 duration-300' : 'translate-x-80'}
          lg:duration-0 
          fixed top-0 right-0 h-screen w-80 z-20 shadow-2xl
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
              Rooms
            </Link>
          </li>
          <li className="w-full pl-5 hover:bg-gray-200 lg:pl-0 lg:w-auto lg:hover:bg-transparent py-3  px-2  opacity-80 hover:opacity-100 hover:scale-105 active:scale-100 transition duration-200">
            <Link className="w-full block  " href="/about">
              About
            </Link>
          </li>

          <li className="w-full pl-5 hover:bg-gray-200 lg:pl-0 lg:w-auto lg:hover:bg-transparent lg:hidden py-3  px-2  opacity-80 hover:opacity-100 hover:scale-105 active:scale-100 transition duration-200">
            {signedUser ? <Authed /> : <UnAuthed />}
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-4 close lg:hidden  cursor-pointer   "
          >
            <X className="first:w-8 first:h-8" />
          </li>
        </ul>
        <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0  ">
          {/* <Link
            href="/"
            className="h-9 flex items-center mr-2 sm:mr-5 border-r border-border pr-2 sm:pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white"
          >
            <Search />
          </Link> */}
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
            {userLoaded ? (
              signedUser ? (
                <Authed />
              ) : (
                <UnAuthed />
              )
            ) : (
              <h4>Loading...</h4>
            )}
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

      <CreateRoomForm
        isOpen={showCreateRoomForm}
        setOpen={setShowCreateRoomForm}
      />
    </header>
  );
}
