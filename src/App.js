import { Outlet } from "react-router-dom";
import AccountMenu from "./components/AccountMenu";
import ContentsCover from "./components/ContentsCover";
import NavigationBar from "./components/NavigationBar";
import { AccountMenuContextProvider } from "./context/AccountMenuContext";
import { UserContextProvider } from "./context/UserContext";
import GlobalStyle from "./styles/GlobalStyle";
import BackgroundArea from "./components/BackgroundArea";
import { SwitchThemeContextProvider } from "./context/SwitchThemeContext";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <SwitchThemeContextProvider>
        <BackgroundArea />
        <UserContextProvider>
          <AccountMenuContextProvider>
            <AccountMenu />
            <NavigationBar />
            <ContentsCover />
          </AccountMenuContextProvider>
          <Outlet />
        </UserContextProvider>
        <Footer />
      </SwitchThemeContextProvider>
    </>
  );
}

export default App;
