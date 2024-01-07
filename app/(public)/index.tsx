import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ClicketyBoo } from "../../components/reusable-components/ClicketyBoo"

const Welcome = () => {
    return (
    <SafeAreaView className="bg-white h-full">
        <Text className="text-2xl">Welcome to The App Soon to be Known as The App Formerly Known as "Gatefold"</Text>
        <ClicketyBoo target="/(public)/music/" logo="⏯️" text="log in"/>
    </SafeAreaView>
    )
}

export default Welcome