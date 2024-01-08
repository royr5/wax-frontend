import { Stack } from "expo-router";

export default () => {
    return ( 
        <Stack>
            <Stack.Screen name="index" options={
                {headerShown: false, title: "Track"}}/>
            <Stack.Screen name="[music_id]/index" options={
                {headerShown: true, title: "Back to feed"}}/>
        </Stack>
     );
}
 
