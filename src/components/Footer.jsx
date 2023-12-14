import React from 'react'
import { styled } from 'styled-components'

export default function Footer() {
    return (
        <FooterContainer>
            테스트
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 24px;
    background-color: black;
    color: white;
`