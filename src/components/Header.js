import React from "react";
import styled from "styled-components";
import DesktopMenu from "../components/DesktopMenu";
import MobileMenu from "../components/MobileMenu";
import Logo from '../assets/images/logo.svg';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
`;

const LogoImg = styled.img`
    max-width: 180px;

    @media(min-width: 384px) {
        max-width: 220px;
    }
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

const Header = () => (
    <HeaderWrapper>
        <LogoImg src={Logo} />
        <MobileMenuWrapper>
            <MobileMenu />
        </MobileMenuWrapper>
        <DesktopMenuWrapper>
            <DesktopMenu />
        </DesktopMenuWrapper>
    </HeaderWrapper>
)

export default Header;