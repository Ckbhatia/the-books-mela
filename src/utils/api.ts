import { getToken } from "./storage"

export const getFetch = async (url: string): Promise<any> => {
  const token = await getToken()
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + token,
    },
  })
}