import { Text, View, Image } from "react-native";
import { Music } from "../types/front-end";
import React from "react";

interface Props {
  album_id: string;
}

const AlbumPage: React.FC<Props> = ({ album_id }) => {
  // useEffect(() => {
  //     const doThis = async () => {
  //       const musicData = await getMusic();
  //       setMusic(musicData);
  //     };
  //     doThis();
  //   }, []);

  const testObj = {
    music_id: "1MVqeIAwhD4T44AKVkIfic",
    artist_ids: ["4oLeXFyACqeem2VImYeBFe", "5SXuuuRpukkTvsLuUknva1"],
    artist_names: ["Fred again..", "Baby Keem"],
    name: "leavemealone",
    type: "single",
    tracks: null,
    album_id: "3Tsut3cVOWP7AKAR4Dtmhb",
    genres: null,
    preview:
      "https://p.scdn.co/mp3-preview/154e06b77aed19154a2b3e7dcfc9af91c74f4433?cid=114fce6830b84eb5868f3795b0847609",
    album_img:
      "https://i.scdn.co/image/ab67616d0000b273c9049966d5a1c1954ae98480",
    release_date: "2023-12-08T00:00:00.000Z",
  };

  return (
    <View className="bg-gray-500 flex justify-center items-center">
      <Text className="text-center m-50">{testObj.name}</Text>

      <Image
        source={{ uri: testObj.album_img }}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
};

export default AlbumPage;
