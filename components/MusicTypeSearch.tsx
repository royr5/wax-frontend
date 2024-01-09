import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FC,useState } from "react";

interface Props {
    isSearchVis: boolean;
    setIsSearchVis: Function;
    typeOfSearch: string;
  }

const MusicTypeSearch: FC<Props> = ({ setIsSearchVis, isSearchVis, typeOfSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchSubmit = () => {
    if (searchText) {
      //TODO
      //request here
      console.log(`Search for ${searchText}`);
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
    </Pressable>
  );
};
export default MusicTypeSearch;
