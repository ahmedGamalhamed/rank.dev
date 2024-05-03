import * as React from 'react';
import TechTag from './technology';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { UserCard } from './UserCard';

export function CardWithFollowers({
  followerIds,
  title,
}: {
  followerIds: string[];
  title: string;
}) {
  return (
    <div className="w-full">
      <Card className="w-full flex flex-col ">
        <CardHeader>
          <CardTitle className="text-xl flex-grow">{title}</CardTitle>
        </CardHeader>
        <CardContent className=" flex gap-4 flex-wrap w-full">
          {followerIds?.map((id) => (
            <UserCard userId={id} key={id} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
