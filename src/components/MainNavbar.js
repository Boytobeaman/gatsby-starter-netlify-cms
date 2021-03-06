import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/movingboxlogo-red.svg'
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
      <Navbar color="dark" dark expand="md" id="mainNavbar">
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>

            <NavItem>
              <Link className="nav-link" to="/folding-crates/">
                Folding Crates
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/moving-bins/">
                Moving Bins
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/euro-stacking-containers/">
                Euro Containers
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/plastic-pallet-containers/">
                Plastic Pallet Containers
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact/">
                Contact Us
              </Link>
            </NavItem>

            <NavItem>
              <Link className="nav-link" to="/about/">
                About Us
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/news/">
                News
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
