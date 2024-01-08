import axios, { AxiosResponse } from "axios";

//ANDROID
//const api = axios.create({ baseURL: "http://10.0.2.2:3000/api" });

//IOS & WEB
const api = axios.create({ baseURL: "http://localhost:3000/api" });

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
