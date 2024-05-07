"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faSave } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { User } from "@/app/(db)/Schema";
import { editProfile } from "@/app/actions/userActions";

export function CardWithSocials(props:{dbUser: User , ownProfile: boolean}) {
  const [isEditMode, setIsEditMode] = useState(false);

  const initialSocialData = Object.keys(props.dbUser.socials).length == 0 ? 
  {
    twitter: "https://www.twitter.com",
    facebook: "https://www.facebook.com",
    github: "https://www.github.com",
    linkedin: "https://www.linkedin.com"
  } 
  : 
  props.dbUser.socials;

const [socialData, setSocialData] = useState(initialSocialData);


  const handleEdit = () => {
    setIsEditMode(true);
  
  };

  const handleSave = () => {
    setIsEditMode(false);
    editProfile({$set:{socials:socialData}})
    
  };

  return (
    <Card className="w-full sm:w-full">
      <CardHeader>
        <div className="flex flex-row items-center">
          <CardTitle className="text-xl flex-grow pt-2">Social Media</CardTitle>
          {!isEditMode  && props.ownProfile && (
            <FontAwesomeIcon
              icon={faEdit}
              className={`text-gray-500 cursor-pointer hover:text-white mx-3 mr-2 w-8 h-8`}
              onClick={handleEdit}
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {Object.entries(socialData).map(([key, value]) => (
          <div key={key} className="flex justify-start items-center w-full sm:w-[90%]">
            {getSocialIcon(key)}
            {isEditMode ? (
              <input
                value={value}
                onChange={(e) => setSocialData({ ...socialData, [key]: e.target.value })}
                className="text-m py-4 mb-2 w-full sm:w-full"
                style={{ borderRadius: "8px", padding: "8px 9px", marginLeft: "10px" }}
              />
            ) : (
              <a href={value} target="_blank" rel="noopener noreferrer" className="text-m ml-2">
                <span className="text-white-500">{value}</span>
              </a>
            )}
          </div>
        ))}
        {isEditMode && (
          <div className="flex justify-center items-center">
            <button
              onClick={handleSave}
              className="text-white cursor-pointer bg-blue-600 rounded-md py-2 px-4"
            >
              <FontAwesomeIcon icon={faSave} className="mr-2" />
              Save
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
  
}

function getSocialIcon(key : String) {
  switch (key) {
    case "twitter":
      return <FontAwesomeIcon icon={faTwitter} className="mr-2 w-8 h-8 text-blue-400" />;
    case "facebook":
      return <FontAwesomeIcon icon={faFacebook} className="mr-2 w-8 h-8 text-blue-500" />;
    case "github":
      return <FontAwesomeIcon icon={faGithub} className="mr-2 w-8 h-8 text-white-800" />;
    case "linkedin":
      return <FontAwesomeIcon icon={faLinkedin} className="mr-2 w-8 h-8 text-blue-800" />;
    default:
      return null;
  }
}
