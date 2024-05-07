"use client"
import * as React from "react";
import TechTag from "./technology";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { User } from "@/app/(db)/Schema";
import { editProfile } from "@/app/actions/userActions";

export function CardWithTechnologies(props:{dbUser: User , ownProfile: boolean}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [technologies, setTechnologies] = useState(props.dbUser.technologies.length == 0 ? ["Bird Watching","Counting Water"] : props.dbUser.technologies );
  const [newTechnology, setNewTechnology] = useState("");
  
  React.useEffect(() => {
    editProfile({technologies})
  }, [technologies])
  
  
  const handleEdit = () => {
    setIsEditMode(true);
  };
  
  const handleSave = () => {
    setIsEditMode(false);
    if (newTechnology) {
      setTechnologies((prevState) => [...prevState, newTechnology] );
      setNewTechnology("");
    }
    editProfile({technologies})
  };

  const handleDeleteTech = (index: number) => {
    const updatedTech = [...technologies];
    updatedTech.splice(index, 1);
    setTechnologies(updatedTech);
    
  };

  return (
    <Card className="w-[100%] flex justify-center items-center flex-col">
      <CardHeader>
        <div className="flex flex-row justify-between">
          <CardTitle className="text-xl flex-grow">Technologies</CardTitle>
          {!isEditMode  && props.ownProfile && (
            <div onClick={handleEdit} className="ml-[390%]">
              <FontAwesomeIcon
                icon={faEdit}
                className={`text-gray-500 cursor-pointer w-8 h-8 hover:text-white`}
                
              />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex gap-2 flex-wrap">
        {isEditMode && (
          <input
            type="text"
            value={newTechnology}
            onChange={(e) => setNewTechnology(e.target.value)}
            className="text-m py-2 mb-2 w-[100%] sm:w-[100%] "
            placeholder="Add a new technology"
            style={{
              borderRadius: "8px",
              padding: "8px 9px",
            }}
          />
        )}
        {technologies.map((tech, index) => (
          <TechTag
            key={index}
            text={tech}
            onDelete={() => handleDeleteTech(index)}
            isEditMode={isEditMode}
          />
        ))}
        
      </CardContent>
      {isEditMode && (
        <div
          onClick={handleSave}
          style={{
            background: '#4F46E5',
            borderRadius: '8px',
            display: 'inline-block',
            padding: '3px 9px',
            cursor: "pointer",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <FontAwesomeIcon icon={faSave} className="mr-2 " />
          Save
        </div>
      )}
    </Card>
  );
}
