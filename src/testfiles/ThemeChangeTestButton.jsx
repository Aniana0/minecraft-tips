import React from 'react'
import { usePageThemeContext } from '../context/PageThemeContext'

export default function ThemeChangeTestButton() {
  const { pageTheme, changePageTheme } = usePageThemeContext();
  const changeTheme = ()=>{
    if(pageTheme === "default"){
      changePageTheme("test");
    }else{
      changePageTheme("default");
    }
  };
  return (
    <button onClick={changeTheme}>테마 변경 확인</button>
  )
}
