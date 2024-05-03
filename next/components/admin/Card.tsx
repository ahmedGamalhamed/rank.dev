/** @format */

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
};

export default function Card(props: CardProps) {
  return (
    // <CardContent>
    <div className="flex w-full flex-row gap-3 rounded-xl border p-5 shadow">
      <section className="flex justify-between gap-2">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#EFF2F7] flex items-center justify-center rounded-full ">
          <props.icon className="h-6 w-6 sm:w-7 sm:h-7 text-[#3C50E0]" />
        </div>
      </section>
      <section className="flex flex-col items-center gap-1  grow">
        <h2 className="text-2xl font-semibold dark:text-white">
          {props.amount}
        </h2>

        <p className="text-xs font-semibold text-gray-500 text-center">
          {props.label}
        </p>
      </section>
    </div>
    // </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        'flex w-full flex-col gap-3 rounded-xl border p-5 shadow',
        props.className
      )}
    />
  );
}
