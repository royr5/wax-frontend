import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import AlbumPage from "../../../../components/AlbumPage";

export default () => {
  


  return (
    <SafeAreaView>
      {/* <Text>
        hey this is where a specific album would be album - {music_id}
      </Text> */}
      <AlbumPage  />
    </SafeAreaView>
  );
};
