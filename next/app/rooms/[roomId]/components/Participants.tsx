'use client';
import React, { FormEvent, ReactEventHandler, useState } from 'react';
import User from './User';
import { useRoomStatus } from './actions/useRoomStatus';
import Link from 'next/link';
import { Toggle } from '@/components/ui/toggle';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export default function Participants() {
  const { status } = useRoomStatus();
  const [toReward, setToReward] = useState<Record<string, boolean>>({});
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-fuchsia-500 text-2xl font-bold mb-4">Reward</h1>
      <div className="">
        <form onSubmit={handleSubmit} className="">
          {status?.clients.map((client) => (
            <div
              className={`flex gap-8 items-center rounded-lg px-4 ${
                toReward[client.id] ? 'bg-yellow-300 bg-opacity-10' : ''
              }`}
              key={client.id}
            >
              <Switch
                name={client.id}
                checked={toReward[client.id]}
                onCheckedChange={(e) => {
                  setToReward((prev) => {
                    return {
                      ...prev,
                      [client.id]: e,
                    };
                  });
                }}
              />
              <User user={client} />
            </div>
          ))}
          <AlertDialog>
            <AlertDialogTrigger>Open</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </form>
      </div>
    </div>
  );
}
