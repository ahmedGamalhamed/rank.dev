import * as React from "react"
import TechTag from "./technology";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CardWithFollowers() {
  return (
    <Card className="w-[100%] flex flex-col ">
       <CardHeader >
          <CardTitle className="text-xl flex-grow">Followers</CardTitle>
      </CardHeader>
      <CardContent className= " flex gap-4 flex-wrap">
      <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      </CardContent>
    </Card>
  )
}
