import styled from 'styled-components';
import { useAccountMenuContext } from '../context/AccountMenuContext';
import { VscMenu } from "react-icons/vsc";

export default function NavigationBar() {
    const { setAccountMenuOpen } = useAccountMenuContext();
    const openAccountMenu = ()=>{
        setAccountMenuOpen(true);
    }
    return (
        <MainNavigation id='main-nav'>
            <button className='img-button burger-button'>
                <VscMenu />
            </button>
            <h1>Logo</h1>
            <button className='img-button account-button' onClick={openAccountMenu}>
                <img src="https://lh3.bunny.novaskin.me/9sY0htI635wRnsE9x8x7DTA6vf73FwiZfqgY5EGnwXE6_7aP_KE48K3ggryKuQhz5mSuJEPPJGeL89s2OqcbSHaseCXRxzmvAuA=rw-h400" alt="" />
            </button>
        </MainNavigation>
    )
}
const MainNavigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`