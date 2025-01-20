import { put } from "../apiService"

export const updateUser = async(document: string, data: unknown) => {
  return await put(`/api/user/${document}`, data)
}

export const deleteUser = async(document: string, data: unknown) => {
    return await put(`/api/user/${document}`, data)
}
  
