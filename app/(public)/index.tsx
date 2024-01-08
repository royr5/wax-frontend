import React from "react";
import { Image, Keyboard, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ClicketyBoo } from "../../components/reusable-components/ClicketyBoo";
import { FormFieldText } from "../../components/reusable-components/FormFieldText";
import { useState } from "react";
import { router } from "expo-router";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Welcome = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="bg-[#15BA46] h-full">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="w-full h-1/5 justify-center items-center">
        <Image
          source={require("../../assets/images/Wax-logo-transparent.png")}
          resizeMode="center"
        />
      </View>
      <View className="mt-8 mb-0">
        <FormFieldText
          label="Email"
          setText={setEmail}
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
          onPressFunction={() => router.replace("/(public)/music")}
          logo="⏯️"
          text="log in"
        />
      </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Welcome;
