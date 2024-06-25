//@ts-nocheck
/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
'use client';

import { DataTable } from '@/components/admin/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import React, { useEffect, useState } from 'react';
import PageTitle from '@/components/admin/PageTitle';
import Image from 'next/image';
import { getUsers } from '../components/actions';
import { Switch } from '@/components/ui/switch';
import IsAdminSwitch from '@/components/admin/IsAdminSwitch';
import ErrorMsg from '@/components/ErrorMsg';

const columns = [
  {
    accessorKey: 'fullName',
    header: 'Name',
    cell: ({ row }) => {
      const imageUrl =
        row.original.imageUrl ||
        'https://cdn-icons-png.freepik.com/512/3177/3177440.png';
      return (
        <div className="flex gap-2 items-center">
          {/* <Image
            className="h-10 w-10"
            src={row.getValue('imageUrl')}`}
            alt={row.getValue('fullName')}
          /> */}
          <Image
            className="h-10 w-10"
            src={imageUrl}
            alt="user-image"
            width={40}
            height={40}
          />
          <p>{row.getValue('fullName')} </p>
        </div>
      );
    },
  },

  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => {
      return <p>{row.getValue('email') || 'Unkown email'} </p>;
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: ({ row }) => {
      const date = new Date(row.getValue('createdAt'));
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
  {
    accessorKey: 'paid',
    header: 'Subscription',
    cell: ({ row }) => {
      const isSubscribed = row.original.paid; // Assuming you have a boolean field indicating subscription status
      return <p>{isSubscribed ? 'Subscribed' : 'Not Subscribed'}</p>;
    },
  },

  {
    accessorKey: 'Admin',
    header: 'Admin',
    cell: ({ row }) => {
      return <IsAdminSwitch user={row.original} property="isAdmin" />;
    },
  },
  {
    accessorKey: 'Blocked',
    header: 'Blocked',
    cell: ({ row }) => {
      return <IsAdminSwitch user={row.original} property="blocked" />;
    },
  },
];

export default function UsersPage() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    getUsers()
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
  }, []);

  if (!users)
    return (
      <div className="h-[80vh] grid place-content-center ">
        <ErrorMsg msg="Loading..." />
      </div>
    );

  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Users" className="dark:text-white" />
      <DataTable columns={columns} data={users} />
    </div>
  );
}
