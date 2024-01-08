import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  return (
    <SafeAreaView>
      <Text>Welcome to GateFold</Text>
      <Link href="/(public)/music/">take me to the music</Link>
    </SafeAreaView>
  );
};

export default Welcome;
