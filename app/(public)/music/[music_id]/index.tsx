import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AlbumPage from "../../../../components/AlbumPage";
import { Reviews } from "../../../../components/Reviews";

export default () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text>
          hey this is where a specific album would be album - {music_id}
        </Text> */}
        <AlbumPage />
        <Reviews />
      </ScrollView>
    </SafeAreaView>
  );
};
