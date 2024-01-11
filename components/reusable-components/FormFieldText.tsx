import { FC, useState } from "react";
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

interface Props {
  label: string;
  setText: Function;
  isRequired?: boolean;
  autoComplete?: autoComplete;
  enterKeyHint?: "enter" | "done" | "next" | "search" | "go";
  onSubmitFunction: any;
}

export const FormFieldText: FC<Props> = ({
  label,
  setText,
  isRequired,
  autoComplete,
  enterKeyHint,
  onSubmitFunction,
}) => {
  const [newText, setNewText] = useState("");

  if (!autoComplete) autoComplete = "off";

  return (
    <View>
      <Text className="text-2xl mx-5">{label}:</Text>
      <TextInput
        onChangeText={(val) => setNewText(val)}
        onBlur={() => setText(newText)}
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
        enablesReturnKeyAutomatically={true}
        onSubmitEditing={onSubmitFunction}
        className="bg-white p-2 m-5 rounded"
      />
    </View>
  );
};
