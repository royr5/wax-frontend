import { View, Text, Pressable } from "react-native";
import { FC } from "react";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  searchText: string;
  setIsSpotifySearched: Function;
}
View;
const SearchFilterBar: FC<Props> = ({ searchText, setIsSpotifySearched }) => {
  return (
    <View className=" h-[4%] w-[100%] flex-row items-center">
        <Text className="ml-8 text-lg">Search results for {searchText}</Text>
      <Pressable
        onPress={() => {
          setIsSpotifySearched(false)
        }}
        className=" ml-auto mr-8"
      >

        <AntDesign name="close" size={30} color="black" />
      </Pressable>
    </View>
  );
};

export default SearchFilterBar;
