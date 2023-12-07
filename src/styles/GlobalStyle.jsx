import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html,body,ul{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .covermenu-container{
        position: fixed;
        visibility: collapse;
        right: -500px;
        top: 0;
        width: 500px;
        height: 100%;
        z-index: 1000;
        transition: right 200ms;
    }
    .covermenu-container.active{
        visibility: visible;
        right: 0;
    }
    @media not screen and (min-width: 768px) {
        .covermenu-container{
            width: 100%;
            right: -100%;
        }
    }
`;

export default GlobalStyle;