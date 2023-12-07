import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext(){
    return useContext(UserContext);
}

export function UserContextProvider({children}){
    const [user, setUser] = useState();
    const setLoginUser = (inputUser)=>{setUser(inputUser)};
    return(
        <UserContext.Provider value={{user, setLoginUser}}>
            {children}
        </UserContext.Provider>
    )
}