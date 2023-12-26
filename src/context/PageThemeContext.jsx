import { createContext, useContext, useEffect, useState } from "react";

const PageThemeContext = createContext();

export function usePageThemeContext(){
    return useContext(PageThemeContext);
}

export function PageThemeContextProvider({children}){
    const startTheme = sessionStorage.getItem("pageTheme") ? sessionStorage.getItem("pageTheme") : "default";
    // 페이지 별 테마
    const [ pageTheme, setPageTheme ] = useState(startTheme);
    const changePageTheme = (themeKeyword)=>{setPageTheme(themeKeyword)};
    const [ isThemeChangeDone, setIsThemeChangeDone ] = useState(false);
    const setThemeChangeState = (state)=>{setIsThemeChangeDone(state)};

    // 타일 뒤집히는데 걸리는 시간
    const themeChangeDelay = 300; // ms

    useEffect(()=>{
        sessionStorage.setItem("pageTheme", pageTheme);
    }, [pageTheme])

    return(
        <PageThemeContext.Provider value={{pageTheme, changePageTheme, isThemeChangeDone, setThemeChangeState, themeChangeDelay}}>
            {children}
        </PageThemeContext.Provider>
    )
}