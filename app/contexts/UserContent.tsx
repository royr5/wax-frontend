import { createContext, useContext, useState } from "react";

interface UserContext {
  user: { username: string };
}

export const UserContext = createContext<UserContext>({} as UserContext);

export const useUserData = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState({ username: "Francesco" });

  const value = { user };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
