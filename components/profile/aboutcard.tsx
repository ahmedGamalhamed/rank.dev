import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export function CardWithAbout() {
  return (
    <Card className="w-[100%] sm:w-[100%]">
       <CardHeader className="py-10">
        <div className="flex flex-row ">
          <CardTitle className="text-xl flex-grow">About</CardTitle>
          <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2 w-8 h-8 "/>  
        </div>
        <CardDescription>Followers: 20 &nbsp;&nbsp; Following: 15</CardDescription>
      </CardHeader>
      <CardContent>
      <div className="flex justify-center items-center flex flex-col ">
        <p className="text-m py-2">
        I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well.
        I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand. The list of projects I follow on GitHub will give you a good idea of the types of tools I’d prefer to be using, and my Instapaper “Starred” list will give you a glimpse into the reading material I find interesting enough to share.
        </p>
      </div>
      </CardContent>
    </Card>
  )
}
