import { createContext, useContext, useState } from "react";

const AccountMenuContext = createContext();

export function useAccountMenuContext(){
    return useContext(AccountMenuContext);
}

export function AccountMenuContextProvider({children}){
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

    const setAccountMenuOpen = (isOpen)=>{setIsAccountMenuOpen(isOpen)};
    
    return(
        <AccountMenuContext.Provider value={{isAccountMenuOpen, setAccountMenuOpen}}>
            {children}
        </AccountMenuContext.Provider>
    )
}