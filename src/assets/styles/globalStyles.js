import {
    createGlobalStyle
} from 'styled-components';

const GlobalStyle = createGlobalStyle `

    html {
        box-sizing: border-box;
        font-size: 16px;
        overflow-x: hidden;
    
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
        text-decoration: none;
        transition: 0.2s ease-in color;
        color: #3658A4;

        &:hover {
            color: #3658A4;
        }
    }

    h1, h2, h3, h4, h5 {
        color: #3658A4;
    }

    h1 {
        font-size: 3rem;

        @media(min-width:992px) {
            font-size: 3.438rem;
        }
    }

    p, li {
        font-size: 0.8rem;
        line-height: 1.2rem;
        color: #393939;
    }

    section {
        padding: 50px 0;

        @media(min-width: 992px) {
            padding: 150px 0;
        }
    }

    .vertical-center {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .align-left {
        align-items: center;

        @media(min-width: 992px) {
            align-items: flex-start;
        }
    }

    .align-right {
        align-items: center;

        @media(min-width: 992px) {
            align-items: flex-end;
        }
    }

    .bold {
        font-weight: bold;
    }

    .active-link {
        color: #3658A4;
    }

    @media (min-width: 992px) {
        .w-50 {
            width: 50%;
        }

        .w-25 {
            width: 25%;
        }
    }

    .container {
        padding: 0 30px;

        @media(min-width:768px) {
            padding: 0 50px;
        }

        @media(min-width: 992px) {
            padding: 0 10%;
        }

        @media(min-width: 2400px) {
            padding: 0 20%;
        }
    }

    .row {
        display: flex;
        flex-direction: column;

        @media(min-width: 768px) {
            flex-direction: row;
        }
    }
   

`;

export default GlobalStyle;