import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FC, useState } from "react";
import { getSpotifyMusic } from "../utils/api";
import { getSearchedMusic } from "../utils/spotify";

interface Props {
  isSearchVis: boolean;
  setIsSearchVis: Function;
  typeOfSearch: string;
  isSpotifySearched: boolean;
  setIsSpotifySearched: Function;
  setDropDVis: Function;
  setSearchedUpMusic: Function;
  searchText: string;
  setSearchText: Function;
}

const MusicTypeSearch: FC<Props> = ({
  setIsSearchVis,
  isSearchVis,
  typeOfSearch,
  isSpotifySearched,
  setIsSpotifySearched,
  setDropDVis,
  setSearchedUpMusic,
  searchText,
  setSearchText,
}) => {
  const handleSearchSubmit = async () => {
    if (searchText) {
      try {
        const spotifyMusic = await getSpotifyMusic(typeOfSearch, searchText);
console.log(spotifyMusic)
        setIsSpotifySearched(!isSpotifySearched);
        setDropDVis(false);
        // setSearchedUpMusic(spotifyMusic);
      } catch (err) {
        console.log("🚀 ~ handleSearchSubmit ~ err:", err);
      }
    } else {
      Alert.alert("Incomplete Search", "Please add in text before searching", [
        { text: "OK", onPress: () => console.log("close") },
      ]);
    }
  };

  return (
    <Pressable
      onPress={() => {
        setIsSearchVis(!isSearchVis);
      }}
    >
      <View className=" bg-white flex flex-row items-center justify-items-center">
        <TextInput
          className="border-2 m-5 p-3 focus:border-green-600 rounded w-[75%]"
          placeholder={typeOfSearch}
          placeholderTextColor="gray"
          value={searchText}
          onChangeText={(e) => setSearchText(e)}
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
    </Pressable>
  );
};
export default MusicTypeSearch;
