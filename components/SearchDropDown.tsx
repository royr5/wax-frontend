import { FC, useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  dropDVis: boolean;
  setDropDVis: Function;
}

const SearchDropDown: FC<Props> = ({ dropDVis, setDropDVis }) => {
  const [searchText, setSearchText] = useState("");
  const [searchVis, setSearchVis] = useState(false);

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
    <Modal visible={dropDVis} animationType="fade" transparent={true}>
      <Pressable
        onPress={() => {
          setDropDVis(!dropDVis);
        }}
      >
        <View className="bg-white mt-[28%] pl-4 pb-4 justify-start items-start">
          <Pressable
            onPress={() => {
              setSearchVis(!searchVis);
            }}
          >
            <Text className="py-2 pl-4 pr-8 border-b">Albums</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSearchVis(!searchVis);
            }}
          >
            <Text className="py-2 pl-4 pr-8 border-b">Tracks</Text>
          </Pressable>
        </View>
      </Pressable>
      {searchVis && (
        <Modal visible={searchVis} animationType="fade" transparent={true}>
          <Pressable
            onPress={() => {
              setSearchVis(!searchVis);
            }}
          >
          <View className=" mt-[48%] bg-white flex flex-row items-center justify-items-center">
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
          </Pressable>
        </Modal>
      )}
    </Modal>
  );
};
export default SearchDropDown;
