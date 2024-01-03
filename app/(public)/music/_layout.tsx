import { Stack } from "expo-router";

export default () => {
    return ( 
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="[music_id]" />
        </Stack>
     );
}
 
