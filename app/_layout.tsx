import { router, Slot, Stack } from "expo-router";
import { useEffect } from "react";

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({ default: "native" });

const InitialLayout = () => {
  useEffect(() => {
    router.replace(`/(public)/`);
  }, []);

  return <Slot />;
};

const RootLayout = () => {
  return <InitialLayout />;
};

export default RootLayout;
