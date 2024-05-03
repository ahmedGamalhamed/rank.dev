'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../(db)/Schema';
import { useAuth, useUser } from '@clerk/nextjs';
import { getOrCreateUser } from '../actions/userActions';

type TStateChange<T> = React.Dispatch<React.SetStateAction<T>>;

interface TGlobalContext {
  signedUser: User | null;
  setSignedUser: TStateChange<User | null>;
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
  const { user } = useUser();
  const { isLoaded } = useAuth();
  useEffect(() => {
    if (!user || !isLoaded) setSignedUser(null);
    else {
      getOrCreateUser({
        authId: user.id,
        email: user.emailAddresses[0].emailAddress,
        fullName: user.fullName,
        imageUrl: user.imageUrl,
      }).then((dbUser: any) => {
        setSignedUser(dbUser);
      });
    }
  }, [user, isLoaded]);

  return (
    <GlobalContext.Provider
      value={{
        signedUser,
        setSignedUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
