import { elastic as Menu } from 'react-burger-menu'

import React from 'react';

import { Link } from "gatsby";

import Button from "../components/Button";

import styled from "styled-components";

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '30px',
    top: '30px',
  },
  bmBurgerBars: {
    background: '#fff',
    height: '13%'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: 'rgb(54, 88, 164)'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '0'
  },
  bmMenu: {
    background: '#51B794',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#51B794'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: '0',
    left: '0'
  }
}

const MenuList = styled.ul`
  outline: none;
  list-style-type: none;
`;

const MenuItem = styled.li`
  margin: 60px 0px;
`;

const MenuLink = styled(Link)`
  color: #fff;
  font-weight: bold;
`;

class MobileMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  
  render () {
    return (
      <Menu right styles={ styles } isOpen={this.state.menuOpen}
      onStateChange={(state) => this.handleStateChange(state)}>
        <MenuList>
            <MenuItem><MenuLink onClick={() => this.closeMenu()} to="/">home</MenuLink></MenuItem>
            <MenuItem><MenuLink onClick={() => this.closeMenu()} to="/oferta">oferta</MenuLink></MenuItem>
            <MenuItem><MenuLink onClick={() => this.closeMenu()} to="/realizacje">realizacje</MenuLink></MenuItem>
            <MenuItem><MenuLink onClick={() => this.closeMenu()} to="/proces">proces</MenuLink></MenuItem>
            <MenuItem><MenuLink onClick={() => this.closeMenu()} to="/kontakt">kontakt</MenuLink></MenuItem>
            <Button big to="/">wycena</Button>
        </MenuList>
      </Menu>
    );
  }
}

export default MobileMenu;