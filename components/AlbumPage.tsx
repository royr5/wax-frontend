import { Text, View, Image } from "react-native";
import { Music } from "../types/front-end";
import React, { useEffect, useState } from "react";
import { useGlobalSearchParams } from "expo-router";
import { getMusic } from "../utils/api";

const AlbumPage = () => {
  const { music_id } = useGlobalSearchParams();
  const [musicContent, setMusicContent] = useState<Music>();

  useEffect(() => {
    const doThis = async () => {
      const musicData = await getMusic(music_id as string, "true");
      setMusicContent(musicData);
    };
    doThis();
  }, []);

  return (
    <View className="bg-gray-100 flex justify-center items-center">
      <Text className="text-center m-50 text-xl font-bold">
        {musicContent?.name}
      </Text>
      <Text>by</Text>
      {musicContent?.artist_names.map((artistName) => {
        return (
          <Text className="text-center m-50 text-xl m-1">{artistName}</Text>
        );
      })}

      <Image
        source={{ uri: musicContent?.album_img }}
        style={{
          width: 400,
          height: 400,
        }}
      />
      <Text className="text-green-800">Rating: {musicContent?.avg_rating}</Text>
    </View>
  );
};

export default AlbumPage;
