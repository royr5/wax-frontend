import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ClicketyBoo } from "../../components/reusable-components/ClicketyBoo";
import { FormFieldText } from "../../components/reusable-components/FormFieldText";
import { useState } from "react";
import { router } from "expo-router";

const [username, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");

const Welcome = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <Text className="text-2xl">
        Welcome to Wax
      </Text>
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

      <ClicketyBoo onPressFunction={()=> router.replace('/music')} logo="⏯️" text="log in" />
    </SafeAreaView>
  );
};

export default Welcome;
