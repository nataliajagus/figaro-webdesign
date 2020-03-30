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
            <MenuItem><MenuLink to="/">home</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/oferta">oferta</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/realizacje">realizacje</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/proces">proces</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/kontakt">kontakt</MenuLink></MenuItem>
            <Button small to="/">wycena</Button>
        </MenuList>
    </MenuWrapper>
)

export default DesktopMenu;