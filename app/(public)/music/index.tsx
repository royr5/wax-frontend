import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { getMusic } from "../../../utils/api";
import { Music } from "../../../types/front-end";

const Albums = () => {
  const [music, setMusic] = useState<Music[]>([]);
  useEffect(() => {
    const doThis = async () => {
      const musicData = await getMusic();
      setMusic(musicData);
    };
    doThis();
  }, []);

  // return (
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row flex-wrap justify-between">
          {music.map((track) => (
            <View
              className="w-1/2 p-4 bg-white rounded-lg items-center"
            >
              <Link
                href={{
                  pathname: `/(public)/music/${track.music_id}`,
                  params: { music_id: track.music_id },
                }}
              >
                <Image
                  source={{ uri: track.album_img }}
                  className="w-40 h-40  justify-self-center self-center rounded-lg"
                />
              </Link>
              <Text className="text-center py-1">{track.artist_names}</Text>
              <Text className="text-center">{track.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Albums;
