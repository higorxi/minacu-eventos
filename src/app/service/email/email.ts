import { post } from "../apiService";

export const postSubscriber = async (email: string) => {
  const response = await post(`/api/email`, {
    email,
  });
  return response;
};
