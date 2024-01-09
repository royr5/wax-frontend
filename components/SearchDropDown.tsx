import React, { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {}

const SearchDropDown = () => {
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
  );
};
export default SearchDropDown;
