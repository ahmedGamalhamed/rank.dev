import { User } from '@/app/(db)/Schema';
import React, { useState } from 'react';
import { Switch } from '../ui/switch';
import { updateUser } from '@/app/actions/userActions';

export default function IsAdminSwitch({
  user,
  property,
}: {
  user: User;
  property: string;
}) {
  //@ts-ignore
  const [admin, setAdmin] = useState(user[property]);
  return (
    <div>
      <Switch
        checked={admin}
        onCheckedChange={(e) => {
          updateUser(user.id, {
            [property]: e,
          });
          setAdmin(e);
        }}
      />
    </div>
  );
}
