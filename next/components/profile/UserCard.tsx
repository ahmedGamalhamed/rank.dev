import { getUserById } from '@/app/actions/userActions';
import TechTag from './technology';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { UserModel } from '@/app/(db)/Schema';

export async function UserCard({ userId }: { userId: string }) {
  const user = await UserModel.findOne({ _id: userId });
  if (!user) return null;
  return (
    <abbr title={user?.fullName} className="no-underline">
      <Link href={`/profile/${userId}`}>
        <Avatar>
          <AvatarImage src={user.imageUrl} />
        </Avatar>
      </Link>
    </abbr>
  );
}
