import axios, { AxiosResponse } from "axios";

const getMusic = async (music_id?:string) => {

  try {
    const response: AxiosResponse = await axios.get(
      // "http://10.0.2.2:3000/api/music"
      "http://localhost:3000/api/music"
    ,{params:{music_id:music_id}});

    return response.data.music;
  } catch (err) {
    console.log("🚀 ~ file: api.ts:11 ~ getMusic ~ err:", err);
  }
};




export default getMusic;
