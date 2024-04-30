'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../(db)/Schema';
import { useAuth } from '@clerk/nextjs';
import { getUserByAuthId } from '../actions/userActions';
import useRoomsData from '../rooms/[roomId]/components/actions/useRoomsData';

type TStateChange<T> = React.Dispatch<React.SetStateAction<T>>;

interface TGlobalContext {
  dbUser: User | null;
  setDBUser: TStateChange<User | null>;
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
  const [dbUser, setDBUser] = useState<User | null>(null);
  const { userId } = useAuth();

  useEffect(() => {
    if (!userId) setDBUser(null);
    else {
      getUserByAuthId(userId).then((dbUser) => {
        setDBUser(dbUser);
      });
    }
  }, [userId]);

  return (
    <GlobalContext.Provider
      value={{
        dbUser,
        setDBUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
