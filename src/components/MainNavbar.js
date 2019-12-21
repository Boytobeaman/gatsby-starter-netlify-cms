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
  componentWillMount(){
    let url = window.location.href
    for (let elem in menu) {
      let this_url = menu[elem].url
      if(url.indexOf(this_url) > -1){
        menu[elem].activeStatus = "active"
      }else{
        menu[elem].activeStatus = ""
      }
    }
  }
  renderNavbar(){

    return Object.keys(menu).map(function(key) {
      let this_menu = menu[key];
      let this_url = menu[key].url;
      if(this_url === "/"){
        return (
          <NavItem key={key}>
            <Link className="nav-link" to="/" title="Home">
              Home
            </Link>
          </NavItem>
        )
      }else{
        return (
          <NavItem key={key}>
            <Link className={`nav-link ${this_menu.activeStatus}`} to={this_menu.url} title={this_menu.text}>
                {this_menu.text}
              </Link>
          </NavItem>
        )
      }
    });
  }
  render() {
    return (
      <Navbar color="dark" dark className="fixed-top border-bottom" expand="md" id="mainNavbar" itemScope='' itemType="http://schema.org/SiteNavigationElement">
        <NavbarBrand className="py-0" href="/">
          <figure className="image mb-0">
            <img src={logo} alt="moving crates logo" style={{ height: '40px' }} />
          </figure>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="mr-auto" navbar>
            {this.renderNavbar()}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
