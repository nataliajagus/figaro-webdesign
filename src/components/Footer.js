import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import ContactInfo from "../components/ContactInfo";

const FooterWrapper = styled.footer`
    padding: 30px 0;
    background: #EEEEEE;
    bottom: 0;
    width: 100%;

    ul {
        list-style-type: none;
    }

    a {
        font-size: 0.8rem;
        color: #393939;
    }

    p {
        margin: 0;
    }

    @media (min-width: 768px) {
        padding: 100px 0;
    }

    @media(min-width: 992px) {
        margin-top: 100px;
    }
`;

const FooterRow = styled.div`
    justify-content: space-between;
    flex-direction: row !important;
    flex-wrap: wrap;
    
    .w-25 {
        width: 100%;
        margin-top: 50px;
        text-align: center;

        @media(min-width: 408px) {
            width: 50%;
            text-align: left;
            &:first-child, &:nth-child(2) {
                margin-top: 0px;
            }   
        }

        @media(min-width: 800px) {
            width: 25%;
            margin-top: 0;
        }
    }
`;

const ColumnHeading = styled.span`
    color: #3658A4;
    font-weight: bold;
    margin-bottom: 20px;
    display: block;
`;


const Footer = () => (
    <FooterWrapper>
        <div className="container">
            <FooterRow className="row">
                <div className="w-25">
                    <ColumnHeading>Oferta</ColumnHeading>
                    <nav>
                        <ul>
                            <li><Link to="/oferta#mini">Strona mini</Link></li>
                            <li><Link to="/oferta#standard">Strona standard</Link></li>
                            <li><Link to="/oferta#cms">Strona CMS</Link></li>
                            <li><Link to="/pytania#domena">Hosting i domena</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="w-25">
                    <ColumnHeading>Na skróty</ColumnHeading>
                    <nav>
                        <ul>
                            <li><Link to="/wycena">Wycena</Link></li>
                            <li><Link to="/realizacje">Realizacje</Link></li>
                            <li><Link to="/pytania">Pytania</Link></li>
                            <li><Link to="/proces">Proces</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="w-25">
                    <ColumnHeading>Firma</ColumnHeading>
                    <p>Figaro Corporation<br />
                    ul. Warszawska 10<br />
                    08-500 Ryki<br />
                    <Link to="/polityka">Polityka prywatności</Link></p>
                </div>
                <div className="w-25">
                    <ColumnHeading>Masz pytania?</ColumnHeading>
                    <ContactInfo />
                </div>
            </FooterRow>
        </div>
    </FooterWrapper>
)

export default Footer;