import React, {Component} from 'react';
import '../Style/LandingPage.scss';
import { Button } from 'react-bootstrap';
import NavigationBar from './NavigationBar'

class LandingPage extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
      }
   }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
        <div className="hero-image text-center" >
           <NavigationBar bgColor='transparent'/>
        <div className='info' >
           <p className="main-text"  >MeFit's FitBoard 
           allows <br /> cross-fit enthusiasts 
           to compare <br /> the best athletes worldwide</p>
           <Button bsPrefix='button' href={'/Data'} variant="outline-primary" >Show me the best</Button>
           <p className="sub-text">Our proud partners <a className='partners-link' href={'/PartnersPage'}>page</a></p>
        </div>
     </div>
      )
   }
}

export default LandingPage //exporting a component make it reusable and this is the beauty of react