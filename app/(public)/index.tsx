import React from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ClicketyBoo } from "../../components/reusable-components/ClicketyBoo";
import { FormFieldText } from "../../components/reusable-components/FormFieldText";
import { useState } from "react";
import { router } from "expo-router";

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const Welcome = () => {
  return (
    <SafeAreaView className="bg-[#15BA46] h-full">
      <View className="w-full h-1/5 justify-center items-center">
        <Image
          source={require("../../assets/images/Wax-logo-transparent.png")}
          resizeMode="center"
        />
      </View>
      <View className="mt-8 mb-0">
        <FormFieldText
          label="Email"
          setText={setUsername}
          isRequired={true}
          autoComplete="email"
          enterKeyHint="next"
        />

        <FormFieldText
          label="Password"
          setText={setPassword}
          isRequired={true}
          autoComplete="current-password"
          enterKeyHint="go"
        />
      </View>
      <View className="m-auto mt-8">
      <ClicketyBoo
        onPressFunction={() => router.replace("/music")}
        logo="⏯️"
        text="log in"
      />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
