import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "https://8se83n1ku9.execute-api.eu-west-2.amazonaws.com/prod/api",
});

export const getMusic = async (
  music_id?: string,
  avg_rating?: "true" | null
) => {
  try {
    const response: AxiosResponse = await api.get(
      "/music",

      { params: { music_id, avg_rating } }
    );

    return response.data.music;
  } catch (err) {
    console.log("🚀 ~ file: api.ts:11 ~ getMusic ~ err:", err);
  }
};

export const getReviews = async (music_id?: string) => {
  try {
    const response: AxiosResponse = await api.get(`/reviews/${music_id}`);

    return response.data.reviews;
  } catch (err) {
    console.log("🚀 ~ file: api.ts:24 ~ getReviews ~ err:", err);
  }
};
