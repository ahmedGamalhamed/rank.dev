/** @format */

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  discription: string;
  presentage: string;
};

export default function Card(props: CardProps) {
  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        {/* label */}
        {/* <p className="text-sm">{props.label}</p> */}
        {/* icon */}
        <div className="w-12 h-12 bg-[#EFF2F7] flex items-center justify-center rounded-full ">
          <props.icon className="h-6 w-6 text-[#3C50E0]" />
        </div>
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold dark:text-white">
          {props.amount}
        </h2>
        <div className="flex justify-between gap-2 font-semibold">
          <p className="text-xs text-gray-500">{props.label}</p>
          <p
            className={`text-xs  ${
              props.label.toLowerCase() !== "total users"
                ? "text-green-500"
                : "text-sky-700"
            }`}
          >
            {props.presentage} &uarr;
          </p>
        </div>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
    />
  );
}
