import { Link } from "gatsby"
import React from "react"
import styled from "styled-components";
import Button from "../components/Button";

const MenuWrapper = styled.div`
    display: flex;
`;

const MenuList = styled.ul`

`;

const MenuItem = styled.li`

`;


const DesktopMenu = ({ isIndexPage }) => ( 
    <MenuWrapper>
        <MenuList>
            <MenuItem><Link to="/">home</Link></MenuItem>
            <MenuItem><Link to="/oferta">oferta</Link></MenuItem>
            <MenuItem><Link to="/realizacje">realizacje</Link></MenuItem>
            <MenuItem><Link to="/co-wiedziec">pytania</Link></MenuItem>
            <MenuItem><Link to="/proces">proces</Link></MenuItem>
            <MenuItem><Link to="/kontakt">kontakt</Link></MenuItem>
            <Button small to="/">wycena</Button>
        </MenuList>
    </MenuWrapper>
)

export default DesktopMenu;