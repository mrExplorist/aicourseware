import React from 'react';

import { User } from 'next-auth';
import Image from 'next/image';
import { Avatar, AvatarFallback } from './ui/avatar';

type Props = {
  user: User;
};

const UserAvatar = ({ user }: Props) => {
  return (
    <Avatar>
      {user.image ? (
        <div className="relative w-ful h-full aspect-square">
          <Image fill src={user.image} alt="user profile" referrerPolicy="no-referrer" />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
