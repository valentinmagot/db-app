import React, {Component} from 'react';
import '../Table.js'
import TableComp from '../Table.js';
import NavigationBar from './NavigationBar'
import '../Style/Data.scss'


class Data extends Component {

  constructor(){
    super();
    this.state = {
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
                if(data.name !== 'error'){
                  that.setState({
                    athletes: data,
                  })
                }
                
            })
          })

          fetch('http://localhost:3001/api/competitions')
          .then(function(response){
            response.json().then(function(data){
                console.log(data);
                if(data.name !== 'error'){
                  // data.forEach(element => {
                  //   var duration = element.duration.days.toString() + ' days ' +element.duration.hours.toString() + ' hours.';
                  //   element.duration = duration;
                  // });
                  that.setState({
                    competitions: data,
                  })
                }
                
            })
          })

          fetch('http://localhost:3001/api/registrations')
          .then(function(response){
            response.json().then(function(data){
                console.log(data);
                if(data.name !== 'error'){
                  that.setState({
                    registrations: data,
                  })
                }
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
    let athletes = this.state.athletes;
    let competitions = this.state.competitions;
    let registrations = this.state.registrations;
    let athleteTitle = 'Athlete Table';
    let competitionTitle = 'Competition Table';
    let registrationTitle = 'Registration Table';
    return (
      <div className="Data">
        <NavigationBar bgColor='parent' />
        <TableComp title={athleteTitle} data={athletes}/>
        <TableComp title={competitionTitle} data={competitions}/>
        <TableComp title={registrationTitle} data={registrations}/>
      </div>
    );

  }
  
}

export default Data;
