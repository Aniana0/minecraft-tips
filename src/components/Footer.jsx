import React from 'react'
import { styled } from 'styled-components'

export default function Footer() {
    return (
        <FooterContainer>
            <p>이 웹 사이트는 공식 MINECRAFT 서비스가 아닙니다. MOJANG 또는 MICROSOFT에 의해 승인되지 않았거나 관련되지 않았습니다.</p>
            <p>ⓒ 2023. Aniana0 All rights reserved.</p>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 32px;
    background-color: black;
    color: #a0a0a0;
    font-size: 12px;
    z-index: 999;
`