'use client';
import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faHeart, faSave } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { User } from '@/app/(db)/Schema';

import { usePathname } from 'next/navigation';

import useSetProfile from './useSetProfile';
import { useGlobalContext } from '@/app/(context)/GlobalContext';

export function CardWithAbout(props: {
  currentProfile: User;
  ownProfile: boolean;
}) {
  const pathName = usePathname();
  const { updateFunction } = useSetProfile();
  const { signedUser } = useGlobalContext();
  const followed = signedUser?.followers.includes(props.currentProfile.id);
  const [isRed, setIsRed] = useState(followed);
  const [isEditMode, setIsEditMode] = useState(false);
  const [aboutText, setAboutText] = useState(
    props.currentProfile.about
      ? props.currentProfile.about
      : `${props.currentProfile.fullName} doesn't has an about yet.`
  );
  const idFollowed = pathName?.split('/').at(-1) || '';

  React.useEffect(() => {
    if (!signedUser) return;
    setIsRed(signedUser.followers.includes(idFollowed));
  }, [signedUser, idFollowed]);

  const toggleColor = () => {
    if (!idFollowed) return;
    if (followed) {
      updateFunction({ $pull: { followers: idFollowed } });
    } else {
      updateFunction({ $push: { followers: idFollowed } });
    }
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    updateFunction({ about: aboutText });
  };

  return (
    <Card className="w-[100%] sm:w-[100%]">
      <CardHeader className="py-10">
        <div className="flex flex-row">
          <CardTitle className="text-xl flex-grow">About</CardTitle>
          {!props.ownProfile && (
            <div onClick={toggleColor}>
              <FontAwesomeIcon
                icon={faHeart}
                className={`${
                  isRed ? 'text-red-500' : 'text-white'
                } cursor-pointer mr-2 w-8 h-8`}
              />
            </div>
          )}
          {!isEditMode && props.ownProfile && (
            <div onClick={handleEdit}>
              <FontAwesomeIcon
                icon={faEdit}
                className={`text-gray-500 cursor-pointer hover:text-white mr-2 w-8 h-8`}
              />
            </div>
          )}
        </div>
        <CardDescription>
          Followers: {props.currentProfile.followers.length} &nbsp;&nbsp;
          Following: {props.currentProfile.following.length}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="justify-center items-center flex flex-col">
          {isEditMode ? (
            <div className="flex justify-between items-center w-full sm:w-[90%] flex-col">
              <textarea
                value={aboutText}
                onChange={(e) => setAboutText(e.target.value)}
                className="text-m py-4 mb-3 w-[110%] sm:w-[110%]"
                rows={8}
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
            <p className="text-m py-2">{aboutText}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
