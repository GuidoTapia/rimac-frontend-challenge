import { paths } from '../paths';

export const userIdStorageKey = 'USER_ID';
export const userInfoStorageKey = 'USER_INFO';
export const userPhoneStorageKey = 'USER_PHONE';

export const storageUserInfo = async ({
  userId,
  userInfo,
  userPhone,
}: {
  userId?: string;
  userInfo?: string;
  userPhone?: string;
}) => {
  if (userId !== undefined)
    await localStorage.setItem(userIdStorageKey, userId);
  if (userInfo !== undefined)
    await localStorage.setItem(userInfoStorageKey, userInfo);
  if (userPhone !== undefined)
    await localStorage.setItem(userPhoneStorageKey, userPhone);
};

export function getUserId() {
  const userId = localStorage.getItem(userIdStorageKey);

  return userId ?? '';
}

export function getUserInfo() {
  const userInfo = localStorage.getItem(userInfoStorageKey);

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
