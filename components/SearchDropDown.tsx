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
  const [typeOfSearch, setTypeOfSearch] = useState("");
  const [isPressedIn1 , setIsPressedIn1] = useState(false)
  const [isPressedIn2 , setIsPressedIn2] = useState(false)

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
        <View className="bg-white mt-[29%] pl-4 pb-4 justify-start items-start">
          <Pressable
            onPressIn={() => {
              setSearchVis(true);
              setTypeOfSearch("Albums");
              setIsPressedIn1(true);
            }}
            onPressOut={() => {
                setIsPressedIn1(false);
            }}
            className={isPressedIn1 ? 'bg-gray-500' : 'bg-white'}
          >
            <Text className="py-2 pl-4 pr-8 border-b">Albums</Text>
          </Pressable>
          <Pressable
            onPressIn={() => {
              setSearchVis(true);
              setTypeOfSearch("Tracks");
              setIsPressedIn2(true);
            }}
            onPressOut={() => {
              setIsPressedIn2(false);
            }}
            className={isPressedIn2 ? 'bg-gray-500' : 'bg-white'}
          >
            <Text className="py-2 pl-4 pr-8 border-b">Tracks</Text>
          </Pressable>
        </View>
      </Pressable>
      {searchVis && (
        <Pressable
          onPress={() => {
            setSearchVis(!searchVis);
          }}
        >
          <View className=" bg-white flex flex-row items-center justify-items-center">
            <TextInput
              className="border-2 m-5 p-3 rounded w-[75%]"
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
      )}
    </Modal>
  );
};
export default SearchDropDown;
