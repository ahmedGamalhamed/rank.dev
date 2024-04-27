import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faGithub, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

export function CardWithSocials() {
  return (
    <Card className="w-[100%] sm:w-[100%]" >
       <CardHeader >
          <CardTitle className="text-xl">Social Media</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
     
      <div className="flex flex-row items-center gap-2  ">
      <FontAwesomeIcon icon={faTwitter} className="text-blue-400 w-8 h-8" />
      <Link href="https://www.twitter.com" className="text-xl">
        Twitter
      </Link>
      </div>
      <div className="flex flex-row items-center gap-2  ">
      <FontAwesomeIcon icon={faFacebook} className="text-blue-500 w-8 h-8" />
      <Link href="https://www.facebook.com" className="text-xl">
        Facebook
      </Link>
      </div>
      <div className="flex flex-row items-center gap-2  ">
      <FontAwesomeIcon icon={faGithub} className="text-white-800 w-8 h-8" />
      <Link href="https://www.github.com" className="text-xl">
        Github
      </Link>
      </div>
      <div className="flex flex-row items-center gap-2  ">
      <FontAwesomeIcon icon={faLinkedin} className="text-blue-800 w-8 h-8" />
      <Link href="https://www.Linkedin.com" className="text-xl">
        Linkedin
      </Link>
      </div>
      </CardContent>
    </Card>
  )
}
