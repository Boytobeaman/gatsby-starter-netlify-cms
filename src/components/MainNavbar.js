import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
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
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/" className="navbar-brand">
                <figure className="image">
                  <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                </figure>
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>

            <NavItem>
              <Link className="nav-link" to="/folding-crates">
                Folding Crates
              </Link>
            </NavItem>

            <NavItem>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </NavItem>

            <NavItem>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </NavItem>

            <NavItem>
              <Link className="nav-link" to="/contact/examples">
                Form Examples
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
