import ErrorMsg from '@/components/ErrorMsg';
import { SignIn, useAuth } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import React from 'react';

export function useProtect(redirectURL: string) {
  const auth = useAuth();

  // if (!auth.isLoaded) return null;
  if (!auth.userId)
    return (
      <div className="w-full h-full py-20 bg-black bg-opacity-5 flex flex-col gap-2 justify-center">
        <ErrorMsg msg="Please Sign-in to continue" />
        <div className="flex justify-center">
          <SignIn routing="hash" forceRedirectUrl={redirectURL} />
        </div>
      </div>
    );
}
