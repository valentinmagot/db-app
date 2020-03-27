import React, {Component} from 'react';
import './App.css';
import './Table.js'
import {  BrowserRouter as Router  , Switch, Route} from 'react-router-dom';
// import HamburgerMenuPage from './HamburgerMenuPage.js';
// import NavigationBar from './NavigationBar.js';
import Data from './Components/Data.js';
import LandingPage from './Components/LandingPage.js';
import PartnersPage from './Components/PartnersPage';


class App extends Component {

  // constructor(){
  //   super();

  // }
  
  render() {
    return (
      <Router>
      <div className="App">
      </div>
      <Switch >
            <Route  path="/" exact component={LandingPage}/>
            <Route path="/Data" component={Data}/>
            <Route path="/PartnersPage" component={PartnersPage}/>
        </Switch>
    </Router>
    );

  }

}

export default App;