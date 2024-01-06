import { Stack } from "expo-router";

export default () => {
    return ( 
        <Stack>
            <Stack.Screen name="index" options={
                {headerShown: true, title: "Track"}}/>
            <Stack.Screen name="[music_id]" options={
                {headerShown: false, title: "Track"}}/>
        </Stack>
     );
}
 
