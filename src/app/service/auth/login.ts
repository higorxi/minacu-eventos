import { post } from "../apiService";

export const loginUser = async (email: string, password: string) => {
    return await post('/api/auth/login', { email, password });
  };
  