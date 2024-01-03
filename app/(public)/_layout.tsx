import { Stack } from "expo-router";

export default () => {
    return ( 
        <Stack>
            <Stack.Screen name="index" options={
                {headerShown: true }
            } />
            <Stack.Screen name="music" options={
                {headerShown: true  }
            } />
        </Stack>
     );
}
 
