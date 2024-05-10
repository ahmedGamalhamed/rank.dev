'use client';
import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from '@/app/(db)/Schema';
import useSetProfile from './useSetProfile';
import { Button } from '../ui/button';
import { Camera } from 'lucide-react';
import { saveImage } from './actions';

export function CardWithAvatar(props: { dbUser: User; ownProfile: boolean }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [nameText, setNameText] = useState(props.dbUser!.fullName);
  const [titleText, setTitleText] = useState(
    props.dbUser!.jobTitle == null ? 'No Title' : props.dbUser!.jobTitle
  );
  const { updateFunction } = useSetProfile();
  const [imageFile, setImageFile] = useState<File | null>(null); // State to store the selected image file
  const [imageUrl, setImageUrl] = useState(props.dbUser.imageUrl); // State to store the image URL
  const imageUploadRef = React.useRef<HTMLInputElement | null>(null);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    const updatedData = { fullName: nameText, jobTitle: titleText, imageUrl };
    updateFunction(updatedData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.size <= 5 * 1024 * 1024) {
        setImageFile(file);
        const reader = new FileReader();
        reader.onload = () => {
          ``;
          if (reader.readyState === 2) {
            setImageUrl(reader.result as string);
          }
        };
        reader.readAsDataURL(file);
      } else {
        alert(
          'File size exceeds the limit (5MB). Please choose a smaller file.'
        );
        console.log(
          'File size exceeds the limit (5MB). Please choose a smaller file.'
        );
      }
    }
  };

  return (
    <Card className="w-[100%] sm:w-[40%]">
      {!isEditMode && props.ownProfile && (
        <div onClick={handleEdit} className="flex justify-end pt-5 pr-5">
          <FontAwesomeIcon
            icon={faEdit}
            className={`text-gray-500 cursor-pointer hover:text-white mt-4 mx-3 mr-2 w-8 h-8`}
          />
        </div>
      )}
      <CardContent>
        <div className="flex justify-center items-center pt-5 relative">
          <label htmlFor="image-upload">
            <Avatar
              style={{
                width: '200px', // Set the width of the avatar container
                height: '200px', // Set the height of the avatar container
                cursor: isEditMode ? 'pointer' : 'default',
              }}
            >
              <AvatarImage src={imageUrl} />
              {/* <AvatarFallback>User Image</AvatarFallback> */}
            </Avatar>
          </label>

          {isEditMode && (
            <>
              <Button
                className="rounded-full p-2 absolute bottom-0 right-1/4 w-10 h-10"
                onClick={() => imageUploadRef.current?.click()}
              >
                <Camera />
              </Button>
              <input
                ref={imageUploadRef}
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-col ">
        <CardHeader className="text-center pt-0">
          <div className="justify-center items-center flex flex-col">
            <div className="">
              {isEditMode ? (
                <div className="flex justify-between items-center w-full sm:w-[90%] flex-col">
                  <textarea
                    value={nameText}
                    onChange={(e) => setNameText(e.target.value)}
                    className="text-m py-4 mb-3 w-[100%] sm:w-[100%] "
                    rows={2}
                    style={{
                      borderRadius: '8px',
                      padding: '8px 9px',
                    }}
                  />
                </div>
              ) : (
                <CardTitle
                  style={{
                    fontSize: '45px',
                    backgroundImage:
                      'linear-gradient(to right, #4F46E5, #5B21B6,#581C87)',
                    color: 'transparent',
                    WebkitBackgroundClip: 'text',
                  }}
                >
                  {nameText}
                </CardTitle>
              )}
            </div>
            <div>
              {isEditMode ? (
                <div className="flex justify-between items-center w-full sm:w-[90%] flex-col">
                  <textarea
                    value={titleText}
                    placeholder="Title"
                    onChange={(e) => setTitleText(e.target.value)}
                    className="text-m py-4 mb-3 w-[100%] sm:w-[100%] "
                    rows={1}
                    style={{
                      borderRadius: '8px',
                      padding: '8px 9px',
                    }}
                  />
                  <div
                    onClick={handleSave}
                    style={{
                      background: '#4F46E5',
                      borderRadius: '8px',
                      display: 'inline-block',
                      padding: '3px 9px',
                      cursor: 'pointer',
                    }}
                  >
                    <FontAwesomeIcon icon={faSave} className="mr-2" />
                    Save
                  </div>
                </div>
              ) : (
                <CardDescription>{titleText}</CardDescription>
              )}
            </div>
          </div>
        </CardHeader>
      </CardFooter>
    </Card>
  );
}
