import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export const ClicketyBoo = ({
  onPressFunction,
  logo,
  text,
}: {
  onPressFunction: Function;
  logo: string;
  text: string;
}) => {
  return (
    <Pressable
      onPress={() => {
        onPressFunction();
      }}
      className="bg-black w-40 p-2 flex-row rounded border-x border-b border-stone-500"
    >
      <Text className="text-white text-2xl w-20 ">{text}</Text>
      <Text className="text-white text-2xl ml-auto">{logo}</Text>
    </Pressable>
  );
};
