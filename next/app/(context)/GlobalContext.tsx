'use client';
import React, { createContext, useContext, useState } from 'react';
import { User } from '../(db)/Schema';

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
