import { USER_INFO_TEXT } from "../constants";

export const getToken = async () => {
  const userInfo = await localStorage.getItem(USER_INFO_TEXT);
  if(userInfo) {
    return JSON.parse(userInfo)?.token;
  }

  return null;
}