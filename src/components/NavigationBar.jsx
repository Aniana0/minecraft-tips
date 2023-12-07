import React, { useState } from 'react'
import { useAccountMenuContext } from '../context/AccountMenuContext';

export default function NavigationBar() {
    const { user, setAccountMenuOpen } = useAccountMenuContext();
    const testEvent = ()=>{
        setAccountMenuOpen(true);
    };
    return (
        <nav id='main-nav'>
            <div className="menu-button">
                <button onClick={testEvent}>테스트</button>
                {user ? <img src="https://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg" alt="" /> : <span>앟</span>}
            </div>
        </nav>
    )
}
