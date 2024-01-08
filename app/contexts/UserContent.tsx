import { ReactNode, createContext, useState } from "react";
import { UserContextType } from "../../types/front-end";

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserContextType>({ username: "Francesco" });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
