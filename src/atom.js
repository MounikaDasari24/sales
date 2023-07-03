import { atom } from 'recoil';

export const isUserAuthenticatedState = atom({
  key: 'isUserAuthenticated',
  default: false,
});

export const userState = atom({
  key: 'userState',
  default: null,
});