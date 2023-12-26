import { styled } from 'styled-components';
import { useAccountMenuContext } from '../context/AccountMenuContext'
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function AccountMenu() {
    const { user } = useUserContext();
    const { isAccountMenuOpen, setAccountMenuOpen } = useAccountMenuContext();
    const closeMenu = async ()=>{
        setAccountMenuOpen(false);        
    };
    return (
        <AccountMenuContainer className={`covermenu-container ${isAccountMenuOpen && "active"}`}>
            {user && ( 
                <ul>
                    <li>
                        <Link to={"/account"} onClick={closeMenu}>계정정보</Link>
                    </li>
                    <li>
                        <Link to={"/edit_account"} onClick={closeMenu}>정보수정</Link>
                    </li>
                </ul>
            )}
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