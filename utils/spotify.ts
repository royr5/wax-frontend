import axios from "axios";
const Buffer = require("buffer").Buffer;

const client_id = "114fce6830b84eb5868f3795b0847609";
const client_secret = "60a9a4d4acea43718a8e9571a1957dec";

export const refreshAccessToken = async () => {
  const refresh_token =
    "AQBn9TUfIbIUD1tQLrHYC6yIKrrYKBV-xkAE4vpayCXjUQcFXl2gb_qYAH21CGOFsgFV8CPTLJxiORkMrBreQ6CmJdtmu5mpMYOzTLfMG23ztvhsNhJc-X1fWOx_g5M27aQ";

  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  const tokenData = await axios({
    method: "post",
    url: authOptions.url,
    data: authOptions.form,
    headers: authOptions.headers,
  });

  return tokenData.data;
};

export const searchSpotify = async (token: string, q: string, type: string) => {
  const reqString = `https://api.spotify.com/v1/search?q=${q}&type=${type}`;

  try {
    const matchedMusic = await axios({
      method: "get",
      url: reqString,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const spotifyItems = matchedMusic.data[`${type}s`].items;

    const formattedSpotify = spotifyItems.map((item: any) => {
      if (item.type === "track") {
        return {
          music_id: item.id,
          artist_ids: item.artists.map((artist: any) => artist.id),
          artist_names: item.artists.map((artist: any) => artist.name),
          name: item.name,
          type: item.type,
          tracks: null,
          album_id: item.album.id,
          genres: null,
          preview: item.preview_url,
          album_img: item.album.images[0].url,
          release_date: item.album.release_date,
        };
      } else if (item.type === "album") {
        return {
          music_id: item.id,
          artist_ids: item.artists.map((artist: any) => artist.id),
          artist_names: item.artists.map((artist: any) => artist.name),
          name: item.name,
          type: item.album_type,
          tracks: [item.total_tracks],
          album_id: item.id,
          genres: null,
          preview: null,
          album_img: item.images[0].url,
          release_date: item.release_date,
        };
      }
    });

    return formattedSpotify;
  } catch (err) {
    console.log(err);
  }
};

export const getSearchedMusic = async (type: string, q: string) => {
  try {
    const { access_token } = await refreshAccessToken();

    const matchedMusic = await searchSpotify(
      access_token,
      q as string,
      type as string
    );

    if (matchedMusic) {
      return matchedMusic;
    }
  } catch (err) {
    console.log(err);
  }
};
