import { router, Slot, Stack } from "expo-router";
import { useEffect } from "react";


const InitialLayout = () => {
  useEffect(() => {
    router.replace(`/(public)/`)
  }, []);

  return <Slot />
};


const RootLayout = () => {
  return (
    <InitialLayout />
  );
};

export default RootLayout