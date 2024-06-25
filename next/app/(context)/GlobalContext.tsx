'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../(db)/Schema';
import { useAuth } from '@clerk/nextjs';
import { getOrCreateUser } from '../actions/userActions';
import ErrorMsg from '@/components/ErrorMsg';

type TStateChange<T> = React.Dispatch<React.SetStateAction<T>>;

interface TGlobalContext {
  signedUser: User | null;
  setSignedUser: TStateChange<User | null>;
  userLoaded: boolean;
  setUserLoaded: TStateChange<boolean>;
}

const GlobalContext = createContext<TGlobalContext | undefined>(undefined);

export const useGlobalContext = () => {
  if (GlobalContext == undefined) throw new Error('No Context');
  return useContext(GlobalContext) as TGlobalContext;
};

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [signedUser, setSignedUser] = useState<User | null>(null);
  const [userLoaded, setUserLoaded] = useState(false);
  const { userId, isLoaded } = useAuth();

  useEffect(() => {
    const setUser = (dbUser: User | null) => {
      setUserLoaded(true);
      setSignedUser(dbUser);
    };

    const getUserFromDB = () => {
      setUserLoaded(false);
      getOrCreateUser().then((dbUser: User) => {
        setUser(dbUser);
        localStorage.setItem('signedUser', JSON.stringify(dbUser));
      });
    };

    const localStorageUser = localStorage.getItem('signedUser') || 'null';
    if (userId) {
      const localStorageUserObj = JSON.parse(localStorageUser) as User | null;
      if (localStorageUserObj) {
        if (localStorageUserObj.authId == userId) {
          setUser(localStorageUserObj);
        } else {
          getUserFromDB();
        }
      } else {
        getUserFromDB();
      }
    } else {
      if (isLoaded) {
        setSignedUser(null);
        localStorage.removeItem('signedUser');
        setUserLoaded(true);
      }
    }
  }, [userId, isLoaded]);

  if (signedUser?.blocked) {
    return (
      <div className="w-screen h-screen grid place-content-center">
        <ErrorMsg msg="Oops, It Seems you have been blocked, please contact an admin at support@rank.dev" />
      </div>
    );
  }

  return (
    <GlobalContext.Provider
      value={{
        signedUser,
        setSignedUser,
        userLoaded,
        setUserLoaded,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
