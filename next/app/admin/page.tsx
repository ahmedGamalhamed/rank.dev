/** @format */

import PageTitle from "@/components/admin/PageTitle";
import { Users, Eye, ShoppingCart, DoorOpen } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/admin/Card";
import BarChart from "@/components/admin/BarChart";
import SalesCard, { SalesProps } from "@/components/admin/SalesCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import PieChart from "@/components/admin/PieChart";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const cardData: CardProps[] = [
  {
    label: "Total Views",
    amount: "$3.456K",
    discription: "+20.1% from last month",
    icon: Eye,
    presentage: "0.43%",
  },
  {
    label: "Total Profit",
    amount: "$45.2K",
    discription: "+180.1% from last month",
    icon: ShoppingCart,
    presentage: "4.35%",
  },
  {
    label: "Total Rooms",
    amount: "2.450",
    discription: "+19% from last month",
    icon: DoorOpen,
    presentage: "2.59%",
  },
  {
    label: "Total Users",
    amount: "3.456",
    discription: "+201 since last hour",
    icon: Users,
    presentage: "0.95%",
  },
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Dashboard" />

      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
            presentage={d.presentage}
          />
        ))}
      </section>

      <section className="grid grid-cols-3 gap-4 transition-all lg:grid-cols-5">
        <div className="col-span-5 lg:col-span-3	">
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
                    12.04.2023 - 12.05.2023
                  </span>
                </p>
              </div>
              <Tabs defaultValue="day" className="mt-4 sm:mt-0 ">
                <TabsList>
                  <TabsTrigger value="day">Day</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <BarChart />
          </CardContent>
        </div>
        <div className="col-span-5 lg:col-span-2 lg:col-start-4	rounded-xl border p-5 shadow flex justify-center items-center">
          <PieChart />

          {/* <CardContent className="flex justify-between gap-4">
            <section>
              <p>Recent Sales</p>
              <p className="text-sm text-gray-400">
                You made 265 sales this month.
              </p>
            </section>
            {uesrSalesData.map((d, i) => (
              <SalesCard
                key={i}
                email={d.email}
                name={d.name}
                saleAmount={d.saleAmount}
              />
            ))}
          </CardContent> */}
        </div>
        {/*  */}
      </section>
    </div>
  );
}
