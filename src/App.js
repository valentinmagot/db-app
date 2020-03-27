import React, {Component} from 'react';
import './App.css';
import './Table.js'
import {  BrowserRouter as Router  , Switch, Route} from 'react-router-dom';
// import HamburgerMenuPage from './HamburgerMenuPage.js';
// import NavigationBar from './NavigationBar.js';
import Data from './Components/Data.js';
import LandingPage from './Components/LandingPage.js';
<<<<<<< HEAD
=======
import PartnersPage from './Components/PartnersPage';
>>>>>>> 5d6a90baa6b585b2b12acb76a020e2c154b802a1


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
<<<<<<< HEAD
=======
            <Route path="/PartnersPage" component={PartnersPage}/>
>>>>>>> 5d6a90baa6b585b2b12acb76a020e2c154b802a1
        </Switch>
    </Router>
    );

  }

}

export default App;