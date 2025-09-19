import { type ReactNode, useState } from 'react';

import { UserContext } from './user-context';
import { paths } from '../paths';
import { tsr } from '../../api/api-client';
import {
  getDocumentType,
  getUserPhone,
  getUserId,
  storageUserInfo,
} from './user-storage';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [documentType, setDocumentType] = useState(getDocumentType() || '');
  const [documentNumber, setDocumentNumber] = useState(getUserId() || '');
  const [phone, setPhone] = useState(getUserPhone() || '');

  const { data: user } = tsr.users.useQuery({
    queryKey: ['users', documentNumber],
    queryData: {},
    enabled: Boolean(documentNumber),
  });

  const today = new Date();
  const birthDate = new Date(user?.body.birthDay || '');

  const timeDiff = Math.abs(today.getTime() - birthDate.getTime());
  const age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

  const registerUser = async ({
    documentType,
    documentNumber,
    phone,
  }: {
    documentType: string;
    documentNumber: string;
    phone: string;
  }) => {
    storageUserInfo({
      userId: documentNumber,
      documentType,
      phone,
    });
    setDocumentType(documentType);
    setDocumentNumber(documentNumber);
    setPhone(phone);
    window.location.href = paths.plans;
  };

  const logOut = () => {
    setDocumentNumber('');
    setDocumentType('');
    setPhone('');

    localStorage.clear();
    window.location.href = paths.home;
  };

  return (
    <UserContext.Provider
      value={{
        documentType,
        phone,
        userAge: age,
        user: documentNumber ? user?.body : undefined,
        userId: documentNumber,
        userIsFetching: false,
        registerUser,
        logOut,
        isActive: Boolean(documentNumber && user),
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
