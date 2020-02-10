import React, {Component} from 'react';
import './App.css';
import './Table.js'
import {  BrowserRouter as Router  , Switch, Route} from 'react-router-dom';
import HamburgerMenuPage from './HamburgerMenuPage.js';
import Data from './Data.js';
import LandingPage from './LandingPage.js';

class App extends Component {

  // constructor(){
  //   super();

  // }
  
  render() {
    return (
      <Router>
      <div className="App">
        <HamburgerMenuPage />
      </div>
      <Switch >
            <Route path="/" exact component={LandingPage}/>
            <Route path="/Data" component={Data}/>
        </Switch>
    </Router>
    );

  }

  
}

export default App;
