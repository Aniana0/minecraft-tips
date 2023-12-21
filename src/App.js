import { Outlet } from "react-router-dom";
import AccountMenu from "./components/AccountMenu";
import ContentsCover from "./components/ContentsCover";
import NavigationBar from "./components/NavigationBar";
import { AccountMenuContextProvider } from "./context/AccountMenuContext";
import { UserContextProvider } from "./context/UserContext";
import GlobalStyle from "./styles/GlobalStyle";
import BackgroundArea from "./components/BackgroundArea";
import { PageThemeContextProvider } from "./context/PageThemeContext";
import Footer from "./components/Footer";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageThemeContextProvider>
        <BackgroundArea />
        <UserContextProvider>
          <AccountMenuContextProvider>
            <NavigationBar />
            <AccountMenu />
            <ContentsCover />
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
