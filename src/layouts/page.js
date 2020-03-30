import React from "react"
import GlobalStyle from "../assets/styles/globalStyles.js";
import Lines from "../components/Lines";
import styled from "styled-components";
import IndexBgTop from '../assets/images/index-menu-bg.svg';
import Footer from "../components/Footer";
import Header from "../components/Header";

const PageWrapper = styled.div`
    overflow-x: hidden;
    margin-top: 30px;
`;

const MobileMenuBefore = styled.div`
    position: fixed;
    border-radius: 0 0 0 100px;
     -moz-border-radius: 0 0 0 100px;
     -webkit-border-radius: 0 0 0 100px;
    background: rgb(81,183,148);
    background: linear-gradient(330deg, rgba(81,183,148,1) 0%, rgba(80,239,183,1) 100%);
    height: 114px;
    width: 106px;
    top: 0px;
    right: 0px;
    z-index: 2;

    @media (min-width: 992px) {
        display: none;
    }
`;

const DesktopMenuBefore = styled.div`
    border-radius: 119px;
    background: rgb(81,183,148);
    background: linear-gradient(330deg,rgba(81,183,148,1) 0%,rgba(80,239,183,1) 100%);
    height: 146px;
    width: 800px;
    position: absolute;
    top: -50px;
    right: -84px;
    z-index: -1;
    display: none;

    @media(min-width: 992px) {
        display: block;
        right: -150px;
        width: 800px;
    }


    @media(min-width: 1200px) {
        right: -84px;
        width: 800px;
    }

    @media(min-width: 1600px) {
        right: -84px;
        width: 900px;
    }

    @media(min-width: 2400px) {
        right: -84px;
        width: 1200px;
    }
`;


const PageLayout = ({children}) => (
    <PageWrapper>  
        <GlobalStyle />
        <MobileMenuBefore />
        <DesktopMenuBefore />
        <div className="container">
            <Header />
        </div>  
        {children}
        <Lines />
        <Footer />
    </PageWrapper>
)


export default PageLayout;