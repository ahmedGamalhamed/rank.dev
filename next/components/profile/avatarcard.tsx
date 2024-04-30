import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export function CardWithAvatar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [nameText, setNameText] = useState(
    "John Doe"
  );
  const [titleText, setTitleText] = useState(
    "Front-End Developer"
  );
  const handleEdit = () => {
   
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
  };
  return (
    <Card className="w-[100%] sm:w-[40%]">
      {!isEditMode && (
                <div onClick={handleEdit} className="flex justify-end pt-5 pr-5">
                  <FontAwesomeIcon
                    icon={faEdit}
                    className={`text-gray-500 cursor-pointer mt-4 mx-3 mr-2 w-8 h-8`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                      color: isHovered ? 'white' : '', 
                     
                    }}
                  />
                </div>
              )}
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
      
      <div className="flex justify-center items-center flex flex-col">
        <div className="">
            {isEditMode ? (
              <div className="flex justify-between items-center w-full sm:w-[90%] flex-col">
                <textarea
                  value={nameText}
                  onChange={(e) => setNameText(e.target.value)}
                  className="text-m py-4 mb-3 w-[100%] sm:w-[100%] "
                  rows="2"
                  style={{
                    borderRadius: "8px",
                    padding:"8px 9px"
                  }}
                />
              </div>
            ) : (
              <CardTitle style={{ fontSize: "45px", backgroundImage: 'linear-gradient(to right, #4F46E5, #5B21B6,#581C87)', color: 'transparent', WebkitBackgroundClip: 'text' }}>{nameText}</CardTitle>
            )}
          </div>
         <div >
            {isEditMode ? (
                <div className="flex justify-between items-center w-full sm:w-[90%] flex-col">
                  <textarea
                    value={titleText}
                    onChange={(e) => setTitleText(e.target.value)}
                    className="text-m py-4 mb-3 w-[100%] sm:w-[100%] "
                    rows="1"
                    style={{
                      borderRadius: "8px",
                      padding:"8px 9px"
                    }}
                  />
                  <div
                    onClick={handleSave}
                    style={{
                      background: '#4F46E5',
                      borderRadius: '8px',
                      display: 'inline-block',
                      padding: '3px 9px',
                      cursor: "pointer"
                    }}
                  >
                    <FontAwesomeIcon icon={faSave} className="mr-2" />
                    Save
                  </div>
                </div>
              ) : (
                <CardDescription>{titleText}</CardDescription>
              )}
            
         </div  >
  
      </div>
     
        
      </CardHeader>
      </CardFooter>
    </Card>
  )
}
