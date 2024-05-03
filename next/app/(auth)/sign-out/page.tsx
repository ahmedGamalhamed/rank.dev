'use client';
import { useGlobalContext } from '@/app/(context)/GlobalContext';
import ErrorMsg from '@/components/ErrorMsg';
import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { signOut } = useClerk();
  const { setSignedUser } = useGlobalContext();
  const router = useRouter();

  signOut().then(() => {
    setSignedUser(null);
    router.push('/');
  });

  return (
    <div className="h-[80vh] grid place-content-center">
      <ErrorMsg msg="Logging you out..." />
    </div>
  );
}
