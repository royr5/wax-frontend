import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export const ClicketyBoo = ({
  target,
  logo,
  text,
}: {
  target: any;
  logo: string;
  text: string;
}) => {
  return (
    <View className="bg-black w-20" >
      <Link href={target}>
        <Pressable>
          <Text className="text-white text-2xl">{text}{logo}</Text>
        </Pressable>
      </Link>
    </View>
  );
};
