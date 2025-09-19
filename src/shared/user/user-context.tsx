import { createContext } from 'react';
import { type UserSchemaDTO } from '../../api/services/users/users.dto';

type IAuth = {
  documentType?: string;
  phone?: string;
  userId?: string;
  user?: UserSchemaDTO;
  isActive?: boolean;
  userIsFetching?: boolean;
  registerUser: (params: {
    documentType: string;
    documentNumber: string;
    phone: string;
  }) => void;
  logOut: () => void;
  userAge?: number;
};

export const UserContext = createContext<IAuth>({
  registerUser: () => {},
  logOut: () => {},
});
