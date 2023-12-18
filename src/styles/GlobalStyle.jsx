import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /* reset */
    html,body,ul{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: inherit;

    }
    button{
        border: none;
        border-radius: none;
    }
    /* AccountMenu & TipMenu */
    .covermenu-container{
        position: fixed;
        visibility: collapse;
        top: 0;
        width: 500px;
        height: 100%;
        z-index: 1000;
    }
    .covermenu-container.active{
        visibility: visible;
    }
    #account-menu{
        right: -500px;
        transition: right 200ms;
    }
    #account-menu.active{
        right: 0;
    }
    @media not screen and (min-width: 600px) {
        .covermenu-container{
            width: 100%;
        }
        #account-menu{
            right: -100%;
        }
    }
`;

export default GlobalStyle;