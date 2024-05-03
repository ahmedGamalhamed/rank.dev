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

const data: Payment[] = [
  {
    order: 'ORD001',
    status: 'Pending',
    lastOrder: '2023-01-15',
    method: 'Credit Card',
  },
  {
    order: 'ORD002',
    status: 'Processing',
    lastOrder: '2023-02-20',
    method: 'PayPal',
  },
  {
    order: 'ORD003',
    status: 'Completed',
    lastOrder: '2023-03-10',
    method: 'Stripe',
  },
  {
    order: 'ORD004',
    status: 'Pending',
    lastOrder: '2023-04-05',
    method: 'Venmo',
  },
  {
    order: 'ORD005',
    status: 'Completed',
    lastOrder: '2023-05-12',
    method: 'Bank Transfer',
  },
  {
    order: 'ORD006',
    status: 'Processing',
    lastOrder: '2023-06-18',
    method: 'Apple Pay',
  },
  {
    order: 'ORD007',
    status: 'Completed',
    lastOrder: '2023-07-22',
    method: 'Google Pay',
  },
  {
    order: 'ORD008',
    status: 'Pending',
    lastOrder: '2023-08-30',
    method: 'Cryptocurrency',
  },
  {
    order: 'ORD009',
    status: 'Processing',
    lastOrder: '2023-09-05',
    method: 'Alipay',
  },
  {
    order: 'ORD010',
    status: 'Completed',
    lastOrder: '2023-10-18',
    method: 'WeChat Pay',
  },
  {
    order: 'ORD011',
    status: 'Pending',
    lastOrder: '2023-11-25',
    method: 'Square Cash',
  },
  {
    order: 'ORD012',
    status: 'Completed',
    lastOrder: '2023-12-08',
    method: 'Zelle',
  },
  {
    order: 'ORD013',
    status: 'Processing',
    lastOrder: '2024-01-15',
    method: 'Stripe',
  },
  {
    order: 'ORD014',
    status: 'Completed',
    lastOrder: '2024-02-20',
    method: 'PayPal',
  },
  {
    order: 'ORD015',
    status: 'Pending',
    lastOrder: '2024-03-30',
    method: 'Credit Card',
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
  console.log(roomsData);
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Rooms" className="dark:text-white" />
      <DataTable columns={columns2} data={roomsData || []} />
    </div>
  );
}
