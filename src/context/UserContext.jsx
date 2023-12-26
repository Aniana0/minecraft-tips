import { createContext, useContext, useEffect, useState } from "react";
import { onUserState } from "../api/firebase";

const UserContext = createContext();

export function useUserContext(){
    return useContext(UserContext);
}

export function UserContextProvider({children}){
    const [user, setUser] = useState(localStorage.getItem("user"));
    const setLoginUser = (inputUser)=>{setUser(inputUser)};

    useEffect(()=>{
        onUserState(setUser)
    },[]);

    return(
        <UserContext.Provider value={{user, setLoginUser}}>
            {children}
        </UserContext.Provider>
    )
}

