import { createContext, useContext, useState } from "react";

const PageThemeContext = createContext();

export function usePageThemeContext(){
    return useContext(PageThemeContext);
}

export function PageThemeContextProvider({children}){
    const [pageTheme, setPageTheme] = useState('default');
    const changePageTheme = (themeKeyword)=>{setPageTheme(themeKeyword)};
    return(
        <PageThemeContext.Provider value={{pageTheme, changePageTheme}}>
            {children}
        </PageThemeContext.Provider>
    )
}