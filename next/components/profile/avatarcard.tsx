import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export function CardWithAvatar() {
  return (
    <Card className="w-[100%] sm:w-[40%]">
      <CardContent>
      <div className="flex justify-center items-center pt-5">
        <Avatar style={{ width: '200px', height: '200px' }} >
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-col ">
      <CardHeader className="text-center pt-0">
      <CardTitle style={{ fontSize: "45px", backgroundImage: 'linear-gradient(to right, #4F46E5, #5B21B6,#581C87)', color: 'transparent', WebkitBackgroundClip: 'text' }}>John Doe</CardTitle>
        <CardDescription>Front-End Developer</CardDescription>
      </CardHeader>
      </CardFooter>
    </Card>
  )
}
