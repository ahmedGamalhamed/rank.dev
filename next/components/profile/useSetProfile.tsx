import { useGlobalContext } from '@/app/(context)/GlobalContext';
import { User } from '@/app/(db)/Schema';
import { editProfile } from '@/app/actions/userActions';
import { useCallback } from 'react';

export default function useSetProfile() {
  const { setSignedUser } = useGlobalContext();
  const updateFunction = useCallback(async (obj: any) => {
    const user = await editProfile(obj);
    setSignedUser(user);
    return user;
  }, []);
  return { updateFunction };
}
