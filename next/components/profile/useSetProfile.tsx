import { useGlobalContext } from '@/app/(context)/GlobalContext';
import { User } from '@/app/(db)/Schema';
import { editProfile } from '@/app/actions/userActions';

export default function useSetProfile() {
  const { setSignedUser } = useGlobalContext();
  async function updateFunction(obj: any) {
    const user = await editProfile(obj);
    setSignedUser(user);
    return user;
  }
  return { updateFunction };
}
