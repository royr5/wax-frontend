import { createContext, useState } from "react";

interface UserContextType {username: string}
interface Iprops {children: string}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = (props: Iprops) => {
    const [user, setUser] = useState<UserContextType>({username:'Francesco'})
    return (
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

