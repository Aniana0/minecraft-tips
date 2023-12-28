import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /* reset */
    html,body, ul, p {
        position: relative;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html, body {
        width: 100%;
        height: 100%;
    }

    #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
    }

    a {
        text-decoration: none;
        color: inherit;

    }
    button {
        border: none;
        border-radius: none;
    }

    /* AccountMenu & TipMenu */
    .covermenu-container {
        position: fixed;
        visibility: collapse;
        top: 0;
        width: 500px;
        height: 100%;
        z-index: 1100;
        transition: right 200ms ease-in-out, left 200ms ease-in-out, visibility 200ms;
    }
    .covermenu-container.active {
        visibility: visible;
    }

    @media not screen and (min-width: 600px) {
        .covermenu-container {
            width: 100%;
        }
    }
`;

export default GlobalStyle;