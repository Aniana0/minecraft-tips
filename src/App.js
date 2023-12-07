import AccountMenu from "./components/AccountMenu";
import NavigationBar from "./components/NavigationBar";
import { AccountMenuContextProvider } from "./context/AccountMenuContext";
import { UserContextProvider } from "./context/UserContext";
import SelectTips from "./pages/SelectTips";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <AccountMenuContextProvider>
          <AccountMenu />
          <NavigationBar />
        </AccountMenuContextProvider>
        <SelectTips />
      </UserContextProvider>
    </>
  );
}

export default App;
