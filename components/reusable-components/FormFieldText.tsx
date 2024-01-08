import { useState } from "react";
import { Text, TextInput, View } from "react-native";

type autoComplete =
  | "additional-name"
  | "address-line1"
  | "address-line2"
  | "birthdate-day"
  | "birthdate-full"
  | "birthdate-month"
  | "birthdate-year"
  | "cc-csc"
  | "cc-exp"
  | "cc-exp-day"
  | "cc-exp-month"
  | "cc-exp-year"
  | "cc-number"
  | "country"
  | "current-password"
  | "email"
  | "family-name"
  | "given-name"
  | "honorific-prefix"
  | "honorific-suffix"
  | "name"
  | "new-password"
  | "off"
  | "one-time-code"
  | "postal-code"
  | "street-address"
  | "tel"
  | "username";

const numericKeyboards = [
  "birthdate-day",
  "birthdate-full",
  "birthdate-month",
  "birthdate-year",
  "cc-csc",
  "cc-exp",
  "cc-exp-day",
  "cc-exp-month",
  "cc-exp-year",
  "cc-number",
  "tel",
];

export const FormFieldText = ({
  label,
  text,
  setText,
  isRequired,
  autoComplete,
  enterKeyHint,
  isMultiline,
}: {
  label: string;
  text: string;
  setText: Function;
  isRequired?: boolean;
  autoComplete?: autoComplete;
  enterKeyHint?: "enter" | "done" | "next" | "search" | "go";
  isMultiline?: boolean;
}) => {
  const [newText, setNewText] = useState("");

  if(!autoComplete) autoComplete = "off"


  return (
    <View>
      <Text>{label}:</Text>
      <TextInput
        onChangeText={(text) => setText(text)}
        value={text}
        autoComplete={autoComplete}
        inputMode={
          autoComplete === "email"
            ? "email"
            : numericKeyboards.includes(autoComplete)
            ? "tel"
            : "text"
        }
        secureTextEntry={autoComplete.endsWith("password")}
        enterKeyHint={enterKeyHint || "enter"}
        multiline={isMultiline || false}
      />
    </View>
  );
};
