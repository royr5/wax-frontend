import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { getMusic } from "../../../utils/api";
import { Music } from "../../../types/front-end";
import SearchDropDown from "../../../components/SearchDropDown";
import { Ionicons } from "@expo/vector-icons";

const Albums = () => {
  const [buttonColor, setButtonColor] = useState("bg-[#15BA46]");
  const [music, setMusic] = useState<Music[]>([]);
  const [dropDVis, setDropDVis] = useState(false);
  useEffect(() => {
    const doThis = async () => {
      const musicData = await getMusic();
      setMusic(musicData);
    };
    doThis();
  }, []);

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback
        onPress={() => {
          setDropDVis(false);
        }}
      >
        <View className="w-full h-[9%] flex-row items-center justify-start mt-[5%] bg-[#15BA46]">
          <Pressable
            className={`items-center mx-6 p-2 ${buttonColor} rounded-sm`}
            onPressIn={() => {
              setButtonColor("bg-green-900");
              setDropDVis(!dropDVis);
            }}
            onPressOut={() => {
              setButtonColor("bg-[#15BA46]");
            }}
          >
            <Ionicons
              name="search-outline"
              size={30}
              color="black"
              className="m-4"
            />
          </Pressable>
          <Image
            source={require("../../../assets/images/Wax-logo-transparent.png")}
            className="h-full w-[50%]"
            resizeMode="center"
          />
        </View>
      </TouchableWithoutFeedback>
      {dropDVis && (
        <SearchDropDown dropDVis={dropDVis} setDropDVis={setDropDVis} />
      )}
      <ScrollView>
        <View className="flex flex-row flex-wrap justify-between bg-white">
          {music.map((track) => (
            <Pressable
              key={track.music_id}
              onPress={() => router.push(`/(public)/music/${track.music_id}`)}
              className="w-1/2 h-auto"
            >
              <View
                key={track.music_id}
                className=" p-4 bg-white rounded-lg items-center justify-center"
              >
                <Image
                  source={{ uri: track.album_img }}
                  className="w-40 h-40  rounded-lg"
                />
                <Text className="text-center py-1">{track.artist_names}</Text>
                <Text className="text-center">{track.name}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Albums;
