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
    <View>
      <View className="bg-white pl-4 pb-4 justify-start items-start">
        <Pressable
          hitSlop={{ right: 1000 }}
          onPressIn={() => {
            setIsSearchVis(true);
            setTypeOfSearch("album");
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
          hitSlop={{ right: 1000 }}
          onPressIn={() => {
            setIsSearchVis(true);
            setTypeOfSearch("track");
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
    </View>
  );
};
export default SearchDropDown;
