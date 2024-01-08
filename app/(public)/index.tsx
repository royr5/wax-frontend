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
      <Image source={require("../../assets/images/Wax-logo-transparent.png")} 
      resizeMode="center"
    />
      </View>
      <View>
        <FormFieldText
          label="Email"
          setText={setUsername}
          isRequired={true}
          autoComplete="email"
          enterKeyHint="next"
        />
      </View>
      <FormFieldText
        label="Password"
        setText={setPassword}
        isRequired={true}
        autoComplete="current-password"
        enterKeyHint="go"
      />

      <ClicketyBoo
        onPressFunction={() => router.replace("/music")}
        logo="⏯️"
        text="log in"
      />
    </SafeAreaView>
  );
};

export default Welcome;
