import { Link } from "gatsby"
import React from "react"
import styled from "styled-components";
import Button from "../components/Button";

const MenuWrapper = styled.div`
    display: flex;
`;

const MenuList = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
`;

const MenuItem = styled.li`
    padding: 0 20px;
`;

const MenuLink = styled(Link)`
    color: #fff;
    font-weight: bold;
    font-size: 0.8rem;

    @media(min-width: 992px) {
        font-size: 0.7rem;
    }
`


const DesktopMenu = ({ isIndexPage }) => ( 
    <MenuWrapper>
        <MenuList>
            <MenuItem><MenuLink to="/" activeClassName="active-link">home</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/oferta" activeClassName="active-link">oferta</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/realizacje" activeClassName="active-link">realizacje</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/proces" activeClassName="active-link">proces</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/kontakt" activeClassName="active-link">kontakt</MenuLink></MenuItem>
            <Button to="/wycena">wycena</Button>
        </MenuList>
    </MenuWrapper>
)

export default DesktopMenu;