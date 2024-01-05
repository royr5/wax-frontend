import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import getMusic from "../../../utils/api";
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

  return (
    <SafeAreaView>
      <Text>Music</Text>

      <View>
        {music.map((track: Music) => (
          <>
            <Link
              href={{
                pathname: `/(public)/music/${track.music_id}`,
                params: { music_id: track.music_id },
              }}
            >
              <Image
                source={{ uri: track.album_img }}
                style={{ width: 200, height: 200 }}
              />
              take me to the this specific album here {track.name}
            </Link>
          </>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Albums;
