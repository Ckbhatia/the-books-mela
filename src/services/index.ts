import { getFetch } from "../utils/api";

export const getVolumes = async (query: string): Promise<any> => {
  return await getFetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
}

export const getBookWithId = async (id: string): Promise<any> => {
  return await getFetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
}