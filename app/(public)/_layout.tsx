import { Stack } from "expo-router";

export default () => {
    return ( 
        <Stack>
            <Stack.Screen name="index" options={
                {headerShown: false, title: "Gatefold"}
            } />
            <Stack.Screen name="music" options={
                {headerShown: false, title: "MainFeed"}
            } />
        </Stack>
     );
}
