import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function CardWithProgressbar() {
  return (
    <Card className="w-[100%] sm:w-[100%]" style={{ fontSize: "45px", backgroundImage: 'linear-gradient(to right, #581C87,#5B21B6,#4F46E5)', WebkitBackgroundClip: 'background' }}>
       <CardHeader >
          <CardTitle className="text-xl">Problems Solved</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <CardDescription className="text-lg text-white">Level 3</CardDescription>
        <CardDescription className="self-end text-white">33</CardDescription>
      </div>
        <Progress value={33}></Progress>
      <div className="flex flex-row justify-between">
        <CardDescription className="text-lg text-white">Level 8</CardDescription>
        <CardDescription className="self-end text-white">48</CardDescription>
      </div>
        <Progress value={48}></Progress>
      <div className="flex flex-row justify-between">
        <CardDescription className="text-lg text-white">Level 1</CardDescription>
        <CardDescription className="self-end text-white">20</CardDescription>
      </div>
        <Progress value={20}></Progress>
      </CardContent>
    </Card>
  )
}
