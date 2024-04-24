import * as React from "react"
import TechTag from "./technology";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithTechnologies() {
  return (
    <Card className="w-[100%] flex justify-center items-center flex-col">
       <CardHeader >
          <CardTitle className="text-xl flex-grow">Technologies</CardTitle>
      </CardHeader>
      <CardContent className= " flex gap-2 flex-wrap">
        <TechTag text="ReactJs"/>
        <TechTag text="TypeScript"/>
        <TechTag text="JavaScript"/>
        <TechTag text="NodeJs"/>
        <TechTag text="Angular"/>
        <TechTag text="NextJs"/>
     
      </CardContent>
    </Card>
  )
}
