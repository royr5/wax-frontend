import axios, { AxiosResponse } from "axios";

const getMusic = async () => {
  try {
    const response: AxiosResponse = await axios.get(
      "http://localhost:3000/api/music"
    );

    return response.data.music;
  } catch (err) {
    console.log("🚀 ~ file: api.ts:11 ~ getMusic ~ err:", err);
  }
};

export default getMusic;
