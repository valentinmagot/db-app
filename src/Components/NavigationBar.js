import React, {Component} from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import '../Style/NavigationBar.scss';
import Menu from './HamburgerMenu'


class NavigationBar extends Component {

  constructor(props){
    super(props);
    this.state = {
        
    }
  }

  render() {
    let bgColor = this.props.bgColor;
    return (
        <div>
        <Navbar  id='navigation' className="nav p-2 " bsPrefix={bgColor} >
          <Navbar.Brand className="mr-auto" id="navBrand" href={'/'}>
            FitBoard
          </Navbar.Brand>
          <Menu  />
          <Nav id="nav-link" >
            <Nav.Link bsPrefix="link"  className="mx-2 px-3 rounded" href={'/Data'}>Leaderboard</Nav.Link>
            <Nav.Link bsPrefix="link"  className="mx-2 px-3 rounded" href={'/Competitions'}>Competitions</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );

  }
  
  
}

export default NavigationBar;
