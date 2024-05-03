//@ts-nocheck
/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
'use client';

import { DataTable } from '@/components/admin/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import PageTitle from '@/components/admin/PageTitle';
import { cn } from '@/lib/utils';
import useRoomsData from '@/app/rooms/[roomId]/components/actions/useRoomsData';
import Image from 'next/image';

type Props = {};
type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'order',
    header: 'Order',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return (
        <div
          className={cn('font-medium w-fit px-4 py-2 rounded-lg', {
            'bg-red-200': row.getValue('status') === 'Pending',
            'bg-orange-200': row.getValue('status') === 'Processing',
            'bg-green-200': row.getValue('status') === 'Completed',
          })}
        >
          {row.getValue('status')}
        </div>
      );
    },
  },
  {
    accessorKey: 'lastOrder',
    header: 'Last Order',
  },
  {
    accessorKey: 'method',
    header: 'Method',
  },
];

const columns2 = [
  {
    accessorKey: 'roomInfo.ownerFullName',
    header: 'Room owner',
    cell: ({ row }) => {
      const roomInfo = row.original.roomInfo || {};
      const imageUrl =
        roomInfo.ownerImageUrl ||
        'https://cdn-icons-png.freepik.com/512/3177/3177440.png';
      const ownerFullName = roomInfo.ownerFullName || 'Unknown';
      return (
        <div className="flex gap-2 items-center">
          <Image
            className="h-10 w-10"
            src={imageUrl}
            alt="user-image"
            width={40}
            height={40}
          />
          <p>{ownerFullName} </p>
        </div>
      );
    },
  },
  {
    accessorKey: 'roomInfo.roomData.roomName',
    header: 'Room Name',
  },
  {
    accessorKey: 'roomInfo.roomData.roomDescription',
    header: 'Room Description',
  },
  {
    accessorKey: 'roomInfo.roomData.roomLevel',
    header: 'Level',
    cell: ({ row }) => {
      return (
        <p className="text-center">
          {row.original.roomInfo.roomData.roomLevel}{' '}
        </p>
      );
    },
  },
  {
    accessorKey: 'roomInfo.roomData.maximumParticipants',
    header: 'Participants',
    cell: ({ row }) => {
      return (
        <p className="text-center">
          <span className="dark:text-[#9b58e3] text-[#4e059d] text-lg">
            {Object.keys(row.original.participatns).length}
          </span>{' '}
          <span className="text-xs">
            / {row.original.roomInfo.roomData.maximumParticipants}
          </span>
        </p>
      );
    },
  },
  {
    accessorKey: 'roomInfo.createdAt',
    header: 'Created At',
    cell: ({ row }) => {
      const date = new Date(row.original.roomInfo.createdAt);
      const formattedDate = date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      return <p>{formattedDate} </p>;
    },
  },
];
export default function OrdersPage({}: Props) {
  const { roomsData } = useRoomsData();
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Rooms" className="dark:text-white" />
      <DataTable columns={columns2} data={roomsData || []} />
    </div>
  );
}
