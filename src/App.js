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
        registrations: [],
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

          fetch('http://localhost:3001/api/competitions')
          .then(function(response){
            response.json().then(function(data){
                console.log(data);
                data.forEach(element => {
                  var duration = element.duration.days.toString() + ' days ' +element.duration.hours.toString() + ' hours.';
                  element.duration = duration;
                });
                that.setState({
                  competitions: data,
                })
            })
          })

          fetch('http://localhost:3001/api/registrations')
          .then(function(response){
            response.json().then(function(data){
                console.log(data);
                that.setState({
                  registrations: data,
                })
            })
          })

          
      }
      setDuration(){

        this.state.competitions.forEach(element => {
          var duration = element.duration.hours.toString() + ' days ' +element.duration.hours.toString() + ' hours.';
          element.duration = duration;
        });

      }
      

  render() {
    let title = this.state.title;
    let athletes = this.state.athletes;
    let competitions = this.state.competitions;
    let registrations = this.state.registrations;
    let athleteTitle = 'Athlete Table';
    let competitionTitle = 'Competition Table';
    let registrationTitle = 'Registration Table';
    return (
      <div className="App">
        <h1>{title}</h1>
        <TableComp title={athleteTitle} data={athletes}/>
        <TableComp title={competitionTitle} data={competitions}/>
        <TableComp title={registrationTitle} data={registrations}/>
      </div>
    );

  }
  
}

export default App;
