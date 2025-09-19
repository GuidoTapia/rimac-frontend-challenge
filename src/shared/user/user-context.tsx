import { createContext } from 'react';

type IAuth = {
  userId?: string;
  user?: { name: string };
  isActive?: boolean;
  userIsFetching?: boolean;
  fetchUser: () => void;
  logOut: () => void;
};

export const UserContext = createContext<IAuth>({
  fetchUser: () => {},
  logOut: () => {},
});
