import { Text, View, Image, Pressable } from "react-native";
import { Music } from "../types/front-end";
import React, { useEffect, useState } from "react";
import { useGlobalSearchParams } from "expo-router";
import { getMusic } from "../utils/api";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

const AlbumPage = () => {
  const { music_id } = useGlobalSearchParams();
  const [musicContent, setMusicContent] = useState<Music>();
  const [ratingColor, setRatingColor] = useState("text-green-800");
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | undefined>();


  useEffect(() => {
    const doThis = async () => {
      const musicData = await getMusic(music_id as string, "true");
      setMusicContent(musicData);

      let score = parseInt(musicData?.avg_rating);
      if (score < 7 && score > 4) {
        setRatingColor("text-yellow-600");
      } else if (score <= 4) {
        setRatingColor("text-red-700");
      }
    };
    doThis();
  }, []);

  const handlePlay = async () => {

    await playPreview(!isPlaying);
  };

  const playPreview = async (bool: boolean) => {
    if (typeof musicContent?.preview === "string" && bool) {

      const { sound } = await Audio.Sound.createAsync(
        {
          uri: musicContent.preview,
        },
        { shouldPlay: true }
      );
      setSound(sound);

      await sound.playAsync();
    } else if (typeof musicContent?.preview === "string" && !bool && sound) {

      await sound.unloadAsync();
    }
    setIsPlaying((current) => {
      return !current;
    });
  };

  return (
    <View className="bg-[#faf6ff] flex justify-center items-center">
      <Text className="text-center  text-xl font-bold my-3 ">
        {musicContent?.name}
      </Text>
      <Text>by</Text>
      <View className="mb-3">
        {musicContent?.artist_names.map((artistName) => {
          return (
            <Text
              key={artistName}
              className="text-center m-50 text-xl m-1 underline-offset-3 underline"
            >
              {artistName}
            </Text>
          );
        })}
      </View>

      <Image
        source={{ uri: musicContent?.album_img }}
        className="h-[350] w-[350] rounded-md"
      />
      {musicContent?.preview && (
        <Pressable onPress={handlePlay}>
          {!isPlaying && <Ionicons name='play' size={30} color={"black"} />}
          {isPlaying && <Ionicons name='pause' size={30} color={"black"} />}
        </Pressable>
      )}
      {!musicContent?.avg_rating && (
        <Text className="font-bold text-lg">no reviews yet...</Text>
      )}
      {musicContent?.avg_rating && (
        <Text className={`${ratingColor} font-bold text-lg m-2 p-2`}>
          Rating: {musicContent?.avg_rating}
        </Text>
      )}
    </View>
  );
};

export default AlbumPage;
