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
    <View className="bg-black w-20">
        <Pressable onPress={()=> {onPressFunction()}}>
          <Text className="text-white text-2xl">
            {text}
            {logo}
          </Text>
        </Pressable>
    </View>
  );
};
