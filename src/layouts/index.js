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



const TopBg = styled.img`
    display: none;
    position: absolute;
    top: -53rem;
    right: -46rem;
    z-index: -1;

    @media(min-width: 992px) {
        display: block;
    }

    @media (min-width:1200px) {
        right: -33rem;
    }   

    @media (min-width: 1400px) {
        right: -36rem;
        top: -40rem;
    }
`;



const IndexLayout = ({children}) => (
    <PageWrapper>  
        <GlobalStyle />
        
        <MobileMenuBefore />
        <div className="container">
            <Header />
        </div>  
        <TopBg src={IndexBgTop}  />
        {children}
        <Lines />
        <Footer />
    </PageWrapper>
)


export default IndexLayout;