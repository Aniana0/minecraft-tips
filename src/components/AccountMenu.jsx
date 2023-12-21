import { styled } from 'styled-components';
import { useAccountMenuContext } from '../context/AccountMenuContext'
import { Link } from 'react-router-dom';

export default function AccountMenu() {
    const { isAccountMenuOpen, setAccountMenuOpen } = useAccountMenuContext();
    const closeMenu = async ()=>{
        setAccountMenuOpen(false);        
    };
    return (
        <AccountMenuContainer className={`covermenu-container ${isAccountMenuOpen && "active"}`}>
            <ul>
                <li>
                    <Link to={"signup"} onClick={closeMenu}>계정등록</Link>
                </li>
                <li>
                    <Link to={"login"}>로그인</Link>
                </li>
            </ul>
        </AccountMenuContainer>
    )
}

const AccountMenuContainer = styled.div`
    right: -500px;
    background-color: #222;
    color: white;
    &.active{
        right: 0;
    }
    @media not screen and (min-width: 600px) {
        right: -100%;
    }

    ul {
        list-style: none;
    }
`