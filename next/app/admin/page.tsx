//@ts-nocheck
/** @format */
'use client';
import PageTitle from '@/components/admin/PageTitle';
import { DoorOpen, Banknote, Video } from 'lucide-react';
import Card, { CardContent } from '@/components/admin/Card';
import BarChart from '@/components/admin/BarChart';
import { SalesProps } from '@/components/admin/SalesCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useRoomsData from '../rooms/[roomId]/components/actions/useRoomsData';
import { getUsersInfo } from './components/actions';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../(context)/GlobalContext';
import ErrorMsg from '@/components/ErrorMsg';

const uesrSalesData: SalesProps[] = [
  {
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    saleAmount: '+$1,999.00',
  },
  {
    name: 'Jackson Lee',
    email: 'isabella.nguyen@email.com',
    saleAmount: '+$1,999.00',
  },
  {
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    saleAmount: '+$39.00',
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    saleAmount: '+$299.00',
  },
  {
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    saleAmount: '+$39.00',
  },
];

export default function AdminPage() {
  const { roomsData } = useRoomsData();
  const [usersInfo, setUsersInfo] = useState({});

  const { signedUser } = useGlobalContext();

  const total_users_in_rooms = roomsData
    ? roomsData
        .map((room) => Object.keys(room.participatns).length)
        .reduce((acc, count) => count + acc, 0)
    : 0;

  useEffect(() => {
    getUsersInfo().then((info) => {
      setUsersInfo(info);
    });
  }, []);

  if (!signedUser) return null;

  if (!signedUser.isAdmin) {
    return (
      <div className="h-[80vh] grid place-content-center">
        <ErrorMsg msg="This Page is only allowed for admins" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" className="dark:text-white" />

      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-3">
        <Card
          amount={roomsData?.length || 0}
          icon={DoorOpen}
          label={'Total Rooms'}
        />
        {/* <Card
          amount={usersInfo.paidCount ?? 0}
          icon={Contact}
          label={'Number of subscriping users'}
        /> */}
        <Card
          amount={total_users_in_rooms}
          icon={Video}
          label={'Total Users In Rooms'}
        />
        <Card
          amount={usersInfo.paidUsers ?? 0}
          icon={Banknote}
          label={'Numbers of Paid users'}
        />
        {/* {cardData.slice(1).map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
            presentage={d.presentage}
          />
        ))} */}
      </section>

      <section className="grid grid-cols-3 gap-4 transition-all lg:grid-cols-8">
        <div className="col-span-8 ">
          <CardContent>
            <div className="flex justify-between items-center flex-col sm:flex-row ">
              <div className="flex items-start">
                <input
                  type="radio"
                  className="w-5 h-5 mr-3 mt-1 accent-[#3C50E0] active:accent-[#3C50E0] hover:accent-[#3C50E0] focus:accent-[#3C50E0]"
                  checked
                />

                <p className="flex flex-col">
                  <span className="text-lg text-[#3C50E0] font-semibold">
                    Active Users
                  </span>
                  <span className="text-[#64748B] text-xs mt-1 ">
                    {/* 12.04.2023 - 12.05.2023 */}
                  </span>
                </p>
              </div>
              <Tabs defaultValue="day" className="mt-4 sm:mt-0 ">
                {/* <TabsList>
                  <TabsTrigger value="day">Day</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                </TabsList> */}
              </Tabs>
            </div>
            <div>
              <BarChart />
            </div>
          </CardContent>
        </div>
        {/* <div className="rounded-xl col-span-4 border p-2 shadow flex justify-center items-center">
          <PieChart /> *

        </div> */}
      </section>
    </div>
  );
}
