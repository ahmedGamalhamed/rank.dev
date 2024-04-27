import { Github, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className=" ">
      <div className="container py-10 flex justify-between items-center border-y-2">
        <div>
          <Link href="/" className="flex items-center ">
            <Image
              src={"/images/logo/logo.png"}
              alt={"Logo"}
              height={60}
              width={60}
            />
            <span className="ml-2 text-xl font-semibold ">Rank.Dev</span>
          </Link>
        </div>

        <ul className="flex items-center text-sm font-semibold">
          <li className="mr-4 ">Terms Of Service</li>
          <li className="mr-4 "> Privacy Policy</li>
          <li className="mr-4 "> Community Guidelines</li>
          <li> Refund Policy</li>
        </ul>

        <ul className="flex items-center">
          <li className="mr-4 cursor-pointer p-2 rounded bg-slate-100 dark:bg-white text-black">
            <Instagram className="w-5 h-5" />
          </li>
          <li className="mr-4 cursor-pointer p-2 rounded bg-slate-100 dark:bg-white text-black ">
            <Twitter className="w-5 h-5" />
          </li>
          <li className=" cursor-pointer p-2 rounded bg-slate-100 dark:bg-white text-black ">
            <Github className="w-5 h-5" />
          </li>
        </ul>
      </div>
      <div>
        <p className="text-center font-semibold text-sm py-5">
          All rights reserved. BeFriendsWith LTD.
        </p>
      </div>
    </footer>
  );
}
