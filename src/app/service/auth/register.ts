import { post } from "../apiService";

export const register = async (dataRegiter: unknown) => {
    return await post('/api/user', dataRegiter);
  };
  
  