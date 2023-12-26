import { Outlet } from "react-router-dom";
import AccountMenu from "./components/AccountMenu";
import CoverAll from "./components/CoverAll";
import NavigationBar from "./components/NavigationBar";
import { AccountMenuContextProvider } from "./context/AccountMenuContext";
import { UserContextProvider } from "./context/UserContext";
import GlobalStyle from "./styles/GlobalStyle";
import BackgroundTileContainer from "./components/BackgroundTileContainer";
import { PageThemeContextProvider } from "./context/PageThemeContext";
import Footer from "./components/Footer";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageThemeContextProvider>
        <BackgroundTileContainer />
        <UserContextProvider>
          <AccountMenuContextProvider>
            <NavigationBar />
            <AccountMenu />
            <CoverAll />
          </AccountMenuContextProvider>
          <PageContainer>
            <Outlet />
          </PageContainer>
        </UserContextProvider>
        <Footer />
      </PageThemeContextProvider>
    </>
  );
}

export default App;
