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
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { socket } from '@/app/(socket)/socket';
import { useGlobalContext } from '@/app/(context)/GlobalContext';
import { useRouter } from 'next/navigation';
import RoomInfo from '@/app/rooms/[roomId]/components/RoomInfo';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectTrigger,
} from '../ui/select';
import { useUser } from '@clerk/nextjs';
import PayButton from './PayButton';

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
  roomLevel: z.coerce
    .number({
      required_error: 'This field is required',
      message: 'A Level',
    })
    .min(1, {
      message: 'Min Level is 1',
    })
    .max(20, {
      message: 'Max Level is 20',
    }),
  maximumParticipants: z.coerce
    .number({
      required_error: 'This field is required',
      message: 'Please select a limit',
    })
    .min(1, {
      message: 'Please Select A number Between 1 and 5',
    })
    .max(5, {
      message: 'Please Select A number Between 1 and 5',
    }),
});

export function CreateRoomForm({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: Function;
}) {
  const { signedUser } = useGlobalContext();
  const router = useRouter();
  const [allowFree, setAllowFree] = useState(true);
  const [paymentChecked, setPaymentChecked] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roomName: '',
      roomDescription: '',
      repo: '',
      tags: '',
      roomLevel: 5,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!signedUser) return;
    socket.emit(
      'createRoom',
      { userId: signedUser.id, user: signedUser, roomData: values },
      (response: { roomId: string }) => {
        setOpen(false);
        router.push(`/rooms/create/${response.roomId}`);
      }
    );
  }

  async function checkPayment(level: string) {
    if (signedUser?.paid) return setAllowFree(true);
    else setAllowFree(false);
    // if (+level < 15) {
    //   setAllowFree(true);
    //   return;
    // }

    // if (!paymentChecked) {
    //   setAllowFree(false);
    // } else {
    //   if (signedUser?.paid) {
    //     setAllowFree(true);
    //   } else {
    //     setAllowFree(false);
    //   }
    // }
  }

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 h-screen  flex justify-center items-center z-40 bg-black bg-opacity-20 backdrop-blur-md">
      <div className="modal-content dark:bg-black bg-white bg-opacity-85 backdrop-blur-lg w-full max-w-2xl  px-20 py-10 border rounded-xl relative">
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-2 items-center">
              <FormField
                control={form.control}
                name="roomName"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel>Room Name</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Give this room a name."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maximumParticipants"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel>Participants count</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select max count" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array(5)
                          .fill(2)
                          .map((n, i) => (
                            <SelectItem key={i} value={(i + 1).toString()}>
                              {i + 1}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="roomDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none"
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
                name="roomLevel"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel>Talent Level</FormLabel>
                    <Select
                      onValueChange={(e) => {
                        checkPayment(e);
                        field.onChange(e);
                      }}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a rank Level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array(20)
                          .fill(2)
                          .map((n, i) => (
                            <SelectItem key={i} value={(i + 1).toString()}>
                              {i + 1}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
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
            <div className="pt-5 h-20 my-4">
              {allowFree ? (
                <Button className="mx-auto block " type="submit">
                  Create
                </Button>
              ) : (
                <PayButton
                  setOpen={setOpen}
                  setAllow={setAllowFree}
                  paymentChecked={paymentChecked}
                  setPaymentChecked={setPaymentChecked}
                />
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
