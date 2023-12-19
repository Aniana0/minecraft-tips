import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAccountMenuContext } from '../context/AccountMenuContext';
import { VscMenu } from "react-icons/vsc";
import ThemeChangeTestButton from '../testfiles/ThemeChangeTestButton';

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
            <Link to={"/"}><h1>MINECRAFT TIPS</h1></Link>
            <ThemeChangeTestButton/>
            <button className='img-button account-button' onClick={openAccountMenu}>
                <img src="https://lh3.bunny.novaskin.me/9sY0htI635wRnsE9x8x7DTA6vf73FwiZfqgY5EGnwXE6_7aP_KE48K3ggryKuQhz5mSuJEPPJGeL89s2OqcbSHaseCXRxzmvAuA=rw-h400" alt="" />
            </button>
        </MainNavigation>
    )
}
const MainNavigation = styled.nav`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 48px;
    color: white;
    background-color: black;
    z-index: 999;
    .img-button{
        padding: 0px;
        margin: 0px 12px;
        width: 24px;
        height: 24px;
        background: none;
        svg{
            width: 100%;
            height: 100%;
            color: white;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`