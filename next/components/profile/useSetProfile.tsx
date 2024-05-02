import { useGlobalContext } from '@/app/(context)/GlobalContext'
import { User } from '@/app/(db)/Schema';
import { editProfile } from '@/app/actions/userActions';

import React from 'react'

export default function useSetProfile() {
  const {setDBUser} = useGlobalContext();
  async function updateFunction (obj:any){
    const user = await editProfile(obj);
    console.log("user gowa set", user);
    setDBUser(user);
    return user ;
  }
  return {updateFunction}
}
