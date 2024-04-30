'use client';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import React from 'react';
import { IRoomStatus } from './actions/useRoomStatus';
import User from './User';
import { updateUserRanks } from '@/app/actions/userActions';
import { useGlobalContext } from '@/app/(context)/GlobalContext';
import { useRouter } from 'next/navigation';

export default function EndCallForm({
  usersToReward,
  roomLevel,
}: {
  usersToReward: Record<string, IRoomStatus['clients'][0] | null>;
  roomLevel: number;
}) {
  const router = useRouter();
  const onClick = async () => {
    await updateUserRanks(roomLevel, Object.keys(usersToReward));
    router.push('/rooms');
  };

  return (
    <div className="flex justify-end mt-6">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Send rewards and End Call</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex flex-col gap-4">
                <p>Send rewards to</p>
                <div className="pl-4">
                  {Object.values(usersToReward).map((user) => {
                    if (user) return <User user={user} key={user.id} />;
                  })}
                </div>
                <p>And End the Call ?</p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onClick}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
