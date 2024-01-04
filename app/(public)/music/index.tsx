import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useEffect } from "react";
import getMusic from "../../../utils/api";

const Albums = () => {
  useEffect(() => {
    const doThis = async () => {
      const music = await getMusic();
      console.log(music);
    };
    doThis();
  }, []);

  return (
    <SafeAreaView>
      <Text>Music</Text>
      <Link href="/(public)/music/1">
        take me to the this specific album here [ ]
      </Link>
    </SafeAreaView>
  );
};

export default Albums;
