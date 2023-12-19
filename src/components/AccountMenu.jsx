import { styled } from 'styled-components';
import { useAccountMenuContext } from '../context/AccountMenuContext'

export default function AccountMenu() {
    const { isAccountMenuOpen } = useAccountMenuContext();
    return (
        <AccountMenuContainer className={`covermenu-container ${isAccountMenuOpen && "active"}`}>
            <ul>
                <li>테스트</li>
            </ul>
        </AccountMenuContainer>
    )
}

const AccountMenuContainer = styled.div`
    right: -500px;
    transition: right 200ms;
    background-color: #222;
    color: white;
    &.active{
        right: 0;
    }
    @media not screen and (min-width: 600px) {
        right: -100%;
    }
`