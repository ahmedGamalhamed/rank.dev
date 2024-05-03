'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../(db)/Schema';
import { useAuth, useUser } from '@clerk/nextjs';
import { getOrCreateUser } from '../actions/userActions';

type TStateChange<T> = React.Dispatch<React.SetStateAction<T>>;

interface TGlobalContext {
  signedUser: User | null;
  setSignedUser: TStateChange<User | null>;
  // userLoaded: boolean;
  // setUserLoaded: TStateChange<boolean>;
}

const GlobalContext = createContext<TGlobalContext | undefined>(undefined);

export const useGlobalContext = () => {
  if (GlobalContext == undefined) throw new Error('No Context');
  return useContext(GlobalContext) as TGlobalContext;
};

export default function ContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [signedUser, setSignedUser] = useState<User | null>(user);
  // const [userLoaded, setUserLoaded] = useState(false);
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      getOrCreateUser().then((dbUser: any) => {
        setSignedUser(dbUser);
      });
    } else {
      setSignedUser(null);
    }
  }, [userId]);

  return (
    <GlobalContext.Provider
      value={{
        signedUser,
        setSignedUser,
        // userLoaded,
        // setUserLoaded,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
