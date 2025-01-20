import { get } from "../apiService";

export const getFeaturedEvents = async () => {
  return await get(`/api/events?featured=true`);
};

export const getAllEvents = async () => {
  const response = await get(`/api/events`);
  return response.data;
}

export const getEventById = async (id: string) => {
  const response = await get(`/api/events/${id}`);
  return response.data
}

