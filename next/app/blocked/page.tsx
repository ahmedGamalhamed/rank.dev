import ErrorMsg from '@/components/ErrorMsg';
import React from 'react';

export default function page() {
  return (
    <div className="w-screen h-screen grid place-content-center">
      <ErrorMsg msg="Oops, It Seems you have been blocked, please contact an admin at support@rank.dev" />
    </div>
  );
}
