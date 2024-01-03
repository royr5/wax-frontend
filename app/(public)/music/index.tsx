import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router"

const Albums = () => {
    return (
        <SafeAreaView> 
            <Text>Music</Text>
            <Link href="/(public)/music/1">
                take me to the this specific album here [   ]
        </Link>
        </SafeAreaView>
    )
}

export default Albums