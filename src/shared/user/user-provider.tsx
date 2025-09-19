import { type ReactNode, useState } from 'react';

import { UserContext } from './user-context';
import { paths } from '../paths';

const userIdStorageKey = 'USER_ID';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState(
    localStorage.getItem(userIdStorageKey) || ''
  );
  const [user, setUser] = useState({ name: 'John Doe' });

  const fetchUser = async () => {};

  const logOut = () => {
    setUserId('');
    setUser({ name: '' });

    localStorage.clear();
    window.location.href = paths.home;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userId,
        userIsFetching: false,
        fetchUser,
        logOut,
        isActive: Boolean(userId && user),
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
