import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ClicketyBoo } from "../../components/reusable-components/ClicketyBoo";
import { FormFieldText } from "../../components/reusable-components/FormFieldText";
import { useState } from "react";

const [username, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");

const Welcome = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <Text className="text-2xl">
        Welcome to The App Soon to be Known as The App Formerly Known as
        "Gatefold"
      </Text>
      <FormFieldText
        label="Email"
        text={username}
        setText={setUsername}
        isRequired={true}
        autoComplete="email"
        enterKeyHint="next"
      />
      <FormFieldText
        label="Password"
        text={password}
        setText={setPassword}
        isRequired={true}
        autoComplete="current-password"
        enterKeyHint="go"
      />

      <ClicketyBoo target="/(public)/music/" logo="⏯️" text="log in" />
    </SafeAreaView>
  );
};

export default Welcome;
