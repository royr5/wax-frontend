import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AlbumPage from "../../../../components/AlbumPage";
import { Reviews } from "../../../../components/Reviews";

export default () => {
  return (
      <ScrollView>
        <AlbumPage />
        <Reviews />
      </ScrollView>
  );
};
