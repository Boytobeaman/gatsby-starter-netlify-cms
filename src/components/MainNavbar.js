import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/movingboxlogo-red.svg'
import { menu } from '../utils'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown
} from 'reactstrap';
export default class MainNavbar extends React.Component{
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <Navbar color="dark" dark expand="md" id="mainNavbar" itemscope='' itemtype="http://schema.org/SiteNavigationElement">
        <NavbarBrand className="py-0">
          <Link to="/" className="navbar-brand py-0">
                <figure className="image mb-0">
                  <img src={logo} alt="moving crates logo" style={{ height: '40px' }} />
                </figure>
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/" title="Home">
                Home
              </Link>
            </NavItem>

            <NavItem>
              <Link className="nav-link" to={menu.foldingCrates.url} title={menu.foldingCrates.text}>
                {menu.foldingCrates.text}
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={menu.movingBins.url} title={menu.movingBins.text}>
                {menu.movingBins.text}
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={menu.euroStackingContainers.url} title={menu.euroStackingContainers.text}>
                {menu.euroStackingContainers.text}
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={menu.plasticPalletBoxes.url} title={menu.plasticPalletBoxes.text}>
                {menu.plasticPalletBoxes.text}
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={menu.contact.url} title={menu.contact.text}>
                Contact Us
              </Link>
            </NavItem>

            <NavItem>
              <Link className="nav-link" to={menu.about.url} title={menu.about.text}>
                About Us
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
