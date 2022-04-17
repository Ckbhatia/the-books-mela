import { USER_INFO_TEXT } from "../constants";

export const getIsAuthenticated = () => {
  const userInfo = localStorage.getItem(USER_INFO_TEXT);
  return userInfo !== null;
}

export const logOut = async () => {
  await localStorage.removeItem(USER_INFO_TEXT);
  return true;
};