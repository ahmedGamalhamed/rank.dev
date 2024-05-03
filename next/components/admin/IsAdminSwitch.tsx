import { User } from '@/app/(db)/Schema';
import React, { useState } from 'react';
import { Switch } from '../ui/switch';
import { updateUser } from '@/app/actions/userActions';

export default function IsAdminSwitch({ user }: { user: User }) {
  const [admin, setAdmin] = useState(user.isAdmin);
  return (
    <div>
      <Switch
        checked={admin}
        onCheckedChange={(e) => {
          updateUser(user.id, {
            isAdmin: true,
          });
          setAdmin(e);
        }}
      />
    </div>
  );
}
