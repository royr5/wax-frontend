import { Image, Pressable, ScrollView, Text, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { getMusic } from "../../../utils/api";
import { Music } from "../../../types/front-end";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Albums = () => {
  const [searchText, setSearchText] = useState("");
  const [music, setMusic] = useState<Music[]>([]);
  useEffect(() => {
    const doThis = async () => {
      const musicData = await getMusic();
      setMusic(musicData);
    };
    doThis();
  }, []);

  const handleSearchSubmit = () => {
    if (searchText) {
      console.log(`Search for ${searchText}`);
    } else {
      Alert.alert("Incomplete Search", "Please add in text before searching", [
        { text: "OK", onPress: () => console.log("close") },
      ]);
    }
  };

  return (
    <SafeAreaView>
      <View className="w-full h-24 justify-center items-center mt-8 bg-[#15BA46]">
        <Image
          source={require("../../../assets/images/Wax-logo-transparent.png")}
          className="h-full"
          resizeMode="center"
        />
      </View>
      <View className="flex flex-row items-center justify-items-center">
        <TextInput
          className="border-2 focus:border-green-600 m-5 p-3 rounded w-[75%]"
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Pressable
          className="bg-black border-2 border-black p-3 rounded"
          onPress={handleSearchSubmit}
        >
          <Text>
            <Ionicons name="search-outline" size={24} color="white" />
          </Text>
        </Pressable>
      </View>

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
