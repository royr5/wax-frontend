import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useGlobalSearchParams } from "expo-router"

export default () => {
const {music_id} = useGlobalSearchParams()

    return (
        <SafeAreaView> 
            <Text>hey this is where a specific album would be album - {music_id}</Text>
        </SafeAreaView>
    )
}
