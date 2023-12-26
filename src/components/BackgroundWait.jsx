import React, { useEffect, useState } from 'react'
import { usePageThemeContext } from '../context/PageThemeContext';

export default function BackgroundWait({setActive, theme, children}) {
  const { pageTheme, changePageTheme, isThemeChangeDone, setThemeChangeState } = usePageThemeContext();
  const [ isActive, setIsActive ] = useState(false);

  useEffect(()=>{
    if(theme === pageTheme){
      setIsActive(true);
    }else{
      changePageTheme(theme);
    }
  }, []);

  useEffect(()=>{
    if(theme !== pageTheme){
      setIsActive(false);
    }
  }, [pageTheme]);

  useEffect(()=>{
    if(isThemeChangeDone){
      setIsActive(true);
    }
  }, [isThemeChangeDone]);

  useEffect(()=>{
    setActive(isActive);
    if(isActive){
      setThemeChangeState(false);
    }
  }, [isActive])

  return (
    <>
      {children}
    </>
  )
}
