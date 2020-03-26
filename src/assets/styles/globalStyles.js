import {
    createGlobalStyle
} from 'styled-components';

const GlobalStyle = createGlobalStyle `

    html {
        box-sizing: border-box;
        font-size: 16px;
    
        @media screen and (min-width: 992px) {
            font-size: 18px;
        }
            
        @media screen and (min-width: 1200px) {
            font-size: 20px;
        }
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: 'Maven Pro';
    }

    button {
        padding: 0;
        cursor: pointer;
        font-family: 'Maven Pro';
    }

    ul {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration:none;
    }

    h1 {
        font-size: 3.438rem;
        color: #3658A4;

    }

    @media (min-width: 992px) {
        .w-50 {
            width: 50%;
        }
    }

    .container {
        padding: 30px;

        @media(min-width:1200px) {
            max-width: 1140px;
            margin: 0 auto;
    }
    }
   

`;

export default GlobalStyle;