import { createContext, useContext, useState } from "react";

const PageThemeContext = createContext();

export function usePageThemeContext(){
    return useContext(PageThemeContext);
}

export function PageThemeContextProvider({children}){
    // 페이지 별 테마
    const [pageTheme, setPageTheme] = useState('default');
    const changePageTheme = (themeKeyword)=>{setPageTheme(themeKeyword)};

    // 타일 뒤집히는데 걸리는 시간
    const themeChangeDelay = 800; // ms

    return(
        <PageThemeContext.Provider value={{pageTheme, changePageTheme, themeChangeDelay}}>
            {children}
        </PageThemeContext.Provider>
    )
}