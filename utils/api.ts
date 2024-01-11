import axios, { AxiosResponse } from "axios";
import { PostReview } from "../types/front-end";

const api = axios.create({
  baseURL: "https://0okk8avr80.execute-api.eu-west-2.amazonaws.com/prod/api",
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

export const postReview = async (music_id: string, review: PostReview) => {
  try {
    const response: AxiosResponse = await api.post(
      `/reviews/${music_id}`,
      review
    );

    return response.data.review;
  } catch (err) {
    console.log("🚀 ~ file: api.ts:40 ~ postReview ~ err:", err);
  }
};


export const getSpotifyMusic = async (type: string, q: string) => {
  try {
    const response: AxiosResponse = await api.get("/search", {
      params: { q, type },
    });
    return response;
  } catch (err) {
    console.log("🚀 ~ getSpotifyMusic ~ err:", err);
  }
};

// export const getSpotifyMusic = async () => {
//   try {
//     const response: AxiosResponse = await api.get(
//       "/search?q=take+care&type=album"
//     );
//     console.log("🚀 ~ getSpotifyMusic ~ response:", response);
//   } catch (err) {
//     console.log("🚀 ~ file: api.ts:11 ~ getMusic ~ err:", err);
//   }
// };

export const deleteReview = async (review_id: number) => {
  try {
    const response: AxiosResponse = await api.delete(`/reviews/${review_id}`);
    return response.data;
  } catch (err) {
    console.log("🚀 ~ file: api.ts:51 ~ deleteReview ~ err:", err);
  }
};

