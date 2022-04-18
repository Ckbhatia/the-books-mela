import { getFetch, postFetch } from "../utils/api";

export const getVolumes = async (query: string): Promise<any> => {
  return await getFetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
}

export const getBookWithId = async (id: string): Promise<any> => {
  return await getFetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
}

export const postBookQuery = async (body: any): Promise<any> => {
  const BE_URL = process.env.REACT_APP_BE_URL;
  return await postFetch(`${BE_URL}/api/v1/books`, body);
}