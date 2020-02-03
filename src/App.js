import React, {Component} from 'react';
import './App.css';
import './Table.js'
import TableComp from './Table.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
        title: 'LEADER BOARD APP',
        competitions: [],
       athletes: [],
       registrations: []
    }
  }

       // MAKES AJAX CALL
       componentDidMount() {
        console.log("COMPONENT HAS MOUNTED");
        var that = this;
        fetch('http://localhost:3001/api/athletes')
          .then(function(response){
            response.json().then(function(data){
                console.log(data);
                that.setState({
                  athletes: data,
                })
            })
          })

          
      }

  render() {
    let title = this.state.title;
    let athletes = this.state.athletes;
    let competitions = this.state.competitions;
    return (
      <div className="App">
        <h1>{title}</h1>
        <TableComp data={athletes}/>
      </div>
    );

  }
  
}

export default App;
