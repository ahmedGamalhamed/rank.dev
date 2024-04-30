'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { MouseEventHandler } from 'react';
import { socket } from '@/app/(socket)/socket';
import { useGlobalContext } from '@/app/(context)/GlobalContext';
import { useRouter } from 'next/navigation';
import RoomInfo from '@/app/rooms/[roomId]/components/RoomInfo';

const formSchema = z.object({
  roomName: z.string().min(2, {
    message: 'ٌRoom Name must be at least 2 characters.',
  }),
  roomDescription: z.string().min(10, {
    message: 'Desrcription must be at least 10 characters.',
  }),
  repo: z.string().optional(),
  tags: z.string().min(1, {
    message: 'Please add at least 1 tag',
  }),
  talentRank: z
    .number()
    .min(1, {
      message: 'Min Rank is 1',
    })
    .max(20, {
      message: 'Max Rank is 20',
    }),
});

export function CreateRoomForm({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: Function;
}) {
  const { dbUser } = useGlobalContext();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roomName: '',
      roomDescription: '',
      repo: '',
      tags: '',
      talentRank: 5,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!dbUser) return;
    socket.emit(
      'createRoom',
      { userId: dbUser.id, user: dbUser, roomData: values },
      (response: { roomId: string }) => {
        setOpen(false);
        router.push(`/rooms/create/${response.roomId}`);
      }
    );
    // console.log(values);
  }

  if (!isOpen) return null;
  // ... \

  return (
    <div className="modal-overlay fixed inset-0 flex justify-center items-center">
      <div className="modal-content bg-black bg-opacity-80 backdrop-blur-lg w-full max-w-2xl  px-20 py-10 border rounded-xl relative">
        <h4 className="text-center text-2xl text-fuchsia-300 font-bold py-4">
          Create A Room
        </h4>
        <button
          className="close-button  absolute top-4 right-8 bg-transparent border-none text-xl"
          onClick={(e) => setOpen(false)}
        >
          ✕
        </button>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="roomName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="What Name to Set this Room ?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="roomDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Brefily descripe what you need help with."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2 justify-center flex-wrap">
              <FormField
                control={form.control}
                name="repo"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel>Share Your Repo.{'(Optional)'}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Share a link to your repo if you like."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="talentRank"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel>Talent level</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Select a level between 1 and 20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Add Some Tags to make it easier for people to find you."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-5">
              <Button className="mx-auto block " type="submit">
                Create
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
