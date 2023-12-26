import React from 'react'
import styled from 'styled-components'
import { usePageThemeContext } from '../context/PageThemeContext'

export default function PageFrame({children}) {
    const { pageTheme } = usePageThemeContext();

    return (
        <PageContainer className={pageTheme === 'test' ? 'active' : ''}>
            <div className="position-fixer">
                {children}
            </div>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    position: relative;
    width: 0px;
    height: calc(100% - (72px + 52px));
    margin: 68px auto 0px;
    background-color: #FFFFFF;
    z-index: 1;
    visibility: collapse;
    transition: visibility 0.3s, width 0.3s ease-in-out;
    &.active{
        width: 1440px;
        visibility: visible;
        box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.3);
    }
`