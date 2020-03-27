import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../Style/HamburgerMenu.scss';

class HamburgerMenu extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
    this.styles = {
      button : {
        bmBurgerButton: {
          position: 'relative',
          width: '26px',
          height: '20px',
          marginRight: 'auto',
        },
        bmBurgerBars: {
          background: '#D95D30'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%',
          bottom: 0,
          left: 0,
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.25em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'block',
          color: '#ffff'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)',
          top: '0px',
          left:'0px',
        }
      }
    }
  }
    render(){
      return (
        <div className="burger">
        <Menu onClick={this.props.onClick} styles={this.styles.button} >
              <a id="about" className="menu-item" href={"/Data"}>Data</a>
            </Menu>
      </div>
      );
    }
}

export default HamburgerMenu;