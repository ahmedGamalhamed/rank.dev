import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faHeart, faSave } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function CardWithAbout() {
  const [isRed, setIsRed] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [aboutText, setAboutText] = useState(
    "I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well. I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand. The list of projects I follow on GitHub will give you a good idea of the types of tools I’d prefer to be using, and my Instapaper “Starred” list will give you a glimpse into the reading material I find interesting enough to share."
  );

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
   
  };

  return (
    <Card className="w-[100%] sm:w-[100%]">
      <CardHeader className="py-10">
        <div className="flex flex-row">
          <CardTitle className="text-xl flex-grow">About</CardTitle>
          <div onClick={toggleColor}>
            <FontAwesomeIcon
              icon={faHeart}
              className={`${isRed ? "text-red-500" : "text-white"} cursor-pointer mr-2 w-8 h-8`}
            />
          </div>
          {!isEditMode && (
            <div onClick={handleEdit}>
              <FontAwesomeIcon
                icon={faEdit}
                className={`text-gray-500 cursor-pointer mr-2 w-8 h-8`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  color: isHovered ? 'white' : '', 
                }}
              />
            </div>
          )}
          
        </div>
        <CardDescription>Followers: 20 &nbsp;&nbsp; Following: 15</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center flex flex-col">
          {isEditMode ? (
            <div className="flex justify-between items-center w-full sm:w-[90%] flex-col">
              <textarea
                value={aboutText}
                onChange={(e) => setAboutText(e.target.value)}
                className="text-m py-4 mb-3 w-[110%] sm:w-[110%] "
                rows="8"
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
            <p className="text-m py-2">{aboutText}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
