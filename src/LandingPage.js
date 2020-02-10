import React, {Component} from 'react';

class LandingPage extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
        title : ' Welcome to Leaderboard',
      }
   }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    let title = this.state.title;
      return (
        <div style={{textAlign : "center" }}>
        <h1 id='title'>{title}</h1>
     </div>
      )
   }
}

export default LandingPage //exporting a component make it reusable and this is the beauty of react