import { Outlet } from "react-router-dom";
import AccountMenu from "./components/AccountMenu";
import ContentsCover from "./components/ContentsCover";
import NavigationBar from "./components/NavigationBar";
import { AccountMenuContextProvider } from "./context/AccountMenuContext";
import { UserContextProvider } from "./context/UserContext";
import GlobalStyle from "./styles/GlobalStyle";
import BackgroundComponent from "./components/BackgroundComponent";
import { SwitchThemeContextProvider } from "./context/SwitchThemeContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <SwitchThemeContextProvider>
        <BackgroundComponent />
        <UserContextProvider>
          <AccountMenuContextProvider>
            <AccountMenu />
            <NavigationBar />
            <ContentsCover />
          </AccountMenuContextProvider>
          <Outlet />
        </UserContextProvider>
      </SwitchThemeContextProvider>
    </>
  );
}

export default App;
