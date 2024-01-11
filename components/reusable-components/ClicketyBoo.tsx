import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export const ClicketyBoo = ({
  onPressFunction,
  text,
}: {
  onPressFunction: Function;
  
  text: string;
}) => {
  return (
    <Pressable
      onPress={() => {
        onPressFunction();
      }}
      className="bg-black w-40 p-2 flex-row rounded-xl border-x border-b border-stone-500"
    >
      <Text className="text-white text-2xl w-20 ml-[30%]">{text}</Text>
      
    </Pressable>
  );
};
