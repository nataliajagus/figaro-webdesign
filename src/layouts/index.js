import React from "react"
import GlobalStyle from "../assets/styles/globalStyles.js";
import Lines from "../components/Lines";
import DesktopMenu from "../components/DesktopMenu";
import MobileMenu from "../components/MobileMenu";
import styled from "styled-components";
import Logo from '../assets/images/logo.svg';
import IndexBgTop from '../assets/images/index-menu-bg.svg';

const MobileMenuBefore = styled.div`
    position: absolute;
    border-radius: 0 0 0 100px;
     -moz-border-radius: 0 0 0 100px;
     -webkit-border-radius: 0 0 0 100px;
    background: rgb(81,183,148);
    background: linear-gradient(330deg, rgba(81,183,148,1) 0%, rgba(80,239,183,1) 100%);
    height: 114px;
    width: 106px;
    top: 0px;
    right: 0px;

    @media (min-width: 992px) {
        display: none;
    }
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
`;

const LogoImg = styled.img`
    max-width: 220px;
`;

const MobileMenuWrapper = styled.div`
    @media (min-width: 992px) {
        display: none;
    }
`;

const DesktopMenuWrapper = styled.div`
    display: none;
    @media (min-width: 992px) {
        display: block;
    }
`;

const TopBg = styled.img`
    display: none;
    position: absolute;
    top: -700px;
    right: -900px;
    z-index: -1;

    @media(min-width: 992px) {
        display: block;
    }
`;


const IndexLayout = ({children, data}) => (
    <>  
        <GlobalStyle />
        
        <MobileMenuBefore />
        <div className="container">
            <Header>
                <LogoImg src={Logo} />
                <MobileMenuWrapper>
                    <MobileMenu />
                </MobileMenuWrapper>
                <DesktopMenuWrapper>
                    <DesktopMenu />
                </DesktopMenuWrapper>
            </Header>
        </div>  
        <TopBg src={IndexBgTop}  />
        {children}
        <Lines />
    </>
)


export default IndexLayout;