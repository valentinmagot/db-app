import React, { Component } from 'react'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from 'mdbreact';

class hamburgerMenuPage extends Component {
  state = {
    collapseID: '',
    selectedID:''
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  render() {
    return (
        <MDBContainer fluid style={{ padding: 0 }}>
          <MDBNavbar
            color='green darken-2'
            light
          >
            <MDBContainer>
              <MDBNavbarBrand href={'/'}>Leaderboard</MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse1')}
              />
              <MDBCollapse
                id='navbarCollapse1'
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left>
                <MDBNavItem >
                    <MDBNavLink onClick={this.toggleCollapse('navbarCollapse1')}  to={'/'} >Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem >
                    <MDBNavLink onClick={this.toggleCollapse('navbarCollapse1')} to={'/Data'}>Data</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
    );
  }
}

export default hamburgerMenuPage;