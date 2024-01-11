import {
  ActivityIndicator,
  Alert,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { getSpotifyMusic } from "../utils/api";
import { useState } from "react";

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
  const [isLoading, setisLoading] = useState(false);

  const handleSearchSubmit = async () => {
    if (searchText) {
      setisLoading(true);
      try {
        const spotifyMusic = await getSpotifyMusic(typeOfSearch, searchText);
        setDropDVis(false);
        setisLoading(false);
        setIsSpotifySearched(!isSpotifySearched);
        setSearchedUpMusic(spotifyMusic);
      } catch (err) {
        console.log("🚀 ~ handleSearchSubmit ~ err:", err);
      } finally {
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
          enterKeyHint="search"
          enablesReturnKeyAutomatically={true}
          onSubmitEditing={handleSearchSubmit}
          className="border-2 m-5 p-3 focus:border-[#B56DE4] rounded w-[75%]"
          placeholder={
            typeOfSearch === "album"
              ? "search albums by artist or album name"
              : "search tracks by artist or track name"
          }
          placeholderTextColor="#0008"
          value={searchText}
          onChangeText={(e) => setSearchText(e)}
        />
        <Pressable
          className="bg-black border-2 border-black p-3 rounded"
          onPress={handleSearchSubmit}
        >
          <Text>
            {isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Ionicons name="search-outline" size={24} color="white" />
            )}
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
};
export default MusicTypeSearch;
