import { FC, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";

import MusicTypeSearch from "./MusicTypeSearch";

interface Props {
  dropDVis: boolean;
  setDropDVis: Function;
}

const SearchDropDown: FC<Props> = ({ dropDVis, setDropDVis }) => {
  const [isSearchVis, setIsSearchVis] = useState(false);
  const [typeOfSearch, setTypeOfSearch] = useState("");
  const [isPressedIn1, setIsPressedIn1] = useState(false);
  const [isPressedIn2, setIsPressedIn2] = useState(false);

  return (
    <View >
      <Pressable
        onPress={() => {
          setDropDVis(!dropDVis);
        }}
      >
        <View className="bg-white pl-4 pb-4 justify-start items-start">
          <Pressable
            onPressIn={() => {
              setIsSearchVis(true);
              setTypeOfSearch("Albums");
              setIsPressedIn1(true);
            }}
            onPressOut={() => {
              setIsPressedIn1(false);
            }}
            className={isPressedIn1 ? "bg-gray-500" : "bg-white"}
          >
            <Text className="py-2 pl-4 pr-8 border-b">Albums</Text>
          </Pressable>
          <Pressable
            onPressIn={() => {
              setIsSearchVis(true);
              setTypeOfSearch("Tracks");
              setIsPressedIn2(true);
            }}
            onPressOut={() => {
              setIsPressedIn2(false);
            }}
            className={isPressedIn2 ? "bg-gray-500" : "bg-white"}
          >
            <Text className="py-2 pl-4 pr-8 border-b">Tracks</Text>
          </Pressable>
        </View>
        {isSearchVis && (
          <MusicTypeSearch
            setIsSearchVis={setIsSearchVis}
            isSearchVis={isSearchVis}
            typeOfSearch={typeOfSearch}
          />
        )}
      </Pressable>
    </View>
  );
};
export default SearchDropDown;
