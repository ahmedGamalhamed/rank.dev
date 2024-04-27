import { auth } from "@clerk/nextjs/server";
import React, { use } from "react";
import RoomForm from "./components/RoomForm";

export default async function Page() {
  const { userId } = auth();

  if (!userId)
    return (
      <div>
        <h1>You must be signed in to create a room</h1>
      </div>
    );

  return (
    <div>
      <h1>
        UserId: <span className='text-red-500'>{userId}</span>
      </h1>
      <RoomForm userId={userId} />
    </div>
  );
}
