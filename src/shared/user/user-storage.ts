import { paths } from '../paths';

export const userIdStorageKey = 'USER_ID';
export const documentTypeStorageKey = 'DOCUMENT_TYPE';
export const userPhoneStorageKey = 'USER_PHONE';

export const storageUserInfo = async ({
  userId,
  documentType,
  phone,
}: {
  userId?: string;
  documentType?: string;
  phone?: string;
}) => {
  if (userId !== undefined)
    await localStorage.setItem(userIdStorageKey, userId);
  if (documentType !== undefined)
    await localStorage.setItem(documentTypeStorageKey, documentType);
  if (phone !== undefined)
    await localStorage.setItem(userPhoneStorageKey, phone);
};

export function getUserId() {
  const userId = localStorage.getItem(userIdStorageKey);

  return userId ?? '';
}

export function getDocumentType() {
  const userInfo = localStorage.getItem(documentTypeStorageKey);

  return userInfo ?? '';
}

export function getUserPhone() {
  const userPhone = localStorage.getItem(userPhoneStorageKey);

  return userPhone ?? '';
}

export const logoutUser = () => {
  localStorage.clear();
  window.location.href = paths.home;
};
