import { createContext, useContext, useState } from "react";

const SwitchThemeContext = createContext();

export function useSwitchThemeContext(){
    return useContext(SwitchThemeContext);
}

export function SwitchThemeContextProvider({children}){
    const [isFlipTile, setIsFlipTile] = useState(false);
    const setFlipTile = (isFlip)=>{setIsFlipTile(isFlip)};
    return(
        <SwitchThemeContext.Provider value={{isFlipTile, setFlipTile}}>
            {children}
        </SwitchThemeContext.Provider>
    )
}