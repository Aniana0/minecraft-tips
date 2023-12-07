import { useAccountMenuContext } from '../context/AccountMenuContext'

export default function AccountMenu() {
    const { isAccountMenuOpen } = useAccountMenuContext();
    const containerStyle = {
        backgroundColor : "#222",
        color : "white"
    }
    return (
        <div className={`covermenu-container ${isAccountMenuOpen && "active"}`} style={containerStyle}>
            <ul>
                <li>테스트</li>
            </ul>
        </div>
    )
}