import { get, patch } from "../apiService";

export const getMyTickets = async () => {
    return await get(`/api/user/authenticated`);
};

export const updateOwnerForTicket = async (data: unknown) => {
    return await patch(`/api/user/authenticated`, data);
  };
  