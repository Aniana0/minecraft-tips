import { createContext, useContext, useState } from "react";

const SwitchThemeContext = createContext();

export function useSwitchThemeContext(){
    return useContext(SwitchThemeContext);
}

export function SwitchThemeContextProvider({children}){
    const [pageTheme, setPageTheme] = useState('default');
    const changePageTheme = (themeKeyword)=>{setPageTheme(themeKeyword)};
    return(
        <SwitchThemeContext.Provider value={{pageTheme, changePageTheme}}>
            {children}
        </SwitchThemeContext.Provider>
    )
}