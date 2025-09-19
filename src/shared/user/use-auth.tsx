import { useContext } from 'react';

import { UserContext } from './user-context';

export const useAuth = () => {
  return useContext(UserContext);
};
