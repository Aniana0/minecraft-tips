import React from 'react'
import styled from 'styled-components'
import { useAccountMenuContext } from '../context/AccountMenuContext';

export default function CoverAll() {
    const { isAccountMenuOpen, setAccountMenuOpen } = useAccountMenuContext();
    const closeAllMenu = async ()=>{
        setAccountMenuOpen(false);
    };
    return (
        <Cover className={`${isAccountMenuOpen && 'active'}`} onClick={closeAllMenu} />
    )
}
const Cover = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    opacity: 0;
    visibility: collapse;
    transition: opacity 200ms ease-in-out, visibility 200ms;
    overflow: hidden;
    z-index: 1000;
    &.active{
        opacity: 1;
        visibility: visible;
        backdrop-filter: blur(2px);
    }
`