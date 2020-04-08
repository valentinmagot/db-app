import React, {Component} from 'react';
import '../Table.js'
import TableComp from '../Table.js';
import { Form, Col, Row, Dropdown} from 'react-bootstrap';
import NavigationBar from './NavigationBar'
import '../Style/Data.scss'
import _ from 'underscore'


class Data extends Component {

  constructor(){
    super();
    this.state = {
        scores:[],
        workouts:[],
        events:[],
        results: [],
        b_results: [],
        athletes: [],
        gen_leaderboard: [],
    }
  }

       // MAKES AJAX CALL
       componentDidMount() {
        console.log("COMPONENT HAS MOUNTED");
        var that = this;
        fetch('http://localhost:3001/api/scores')
          .then(function(response){
            response.json().then(function(data){
                console.log(data);
                if(data.name !== 'error'){
                  that.setState({
                    scores: data,
                  })

                }
                
            })
          })

          fetch('http://localhost:3001/athletes')
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

          fetch('http://localhost:3001/events_info')
          .then(function(response){
            response.json().then(function(data){
                console.log(data);
                if(data.name !== 'error'){
                  that.setState({
                    workouts: data,
                  })

                let scores = that.state.scores
                let workouts = that.state.workouts
                let results = that.state.results
                let events = []
                let event= []
                for (let i = 0; i < workouts.length; i++) {
                    const element = workouts[i];
                    let on_time = _.filter(scores, function(score) {
                      return  score.score_time <= element.time_caped && score.event_name === element.name
                    })
                    let late = _.filter(scores, function(score) {
                      return  score.score_time > element.time_caped && score.event_name === element.name
                    })
                    let on_sorted_event = [];
                    let off_sorted_event = [];
                    if(element.t1 === "time" ) {   
                        if (element.d1 === "ASC"){
                          on_sorted_event = _.sortBy(on_time, function (score) {
                            return score.score_time
                          })
                         
                        }else {
                          on_sorted_event = _.sortBy(on_time, function (score) {
                            return score.score_time
                          }).reverse()
                        }
                    }else {
                      if (element.d1 === "ASC"){
                        on_sorted_event = _.sortBy(on_time, function (score) {
                            return score.score_rep  
                        })
                      }else {
                        on_sorted_event = _.sortBy(on_time, function (score) {
                            return score.score_rep
                        }).reverse() 
                      }

                    }
                    off_sorted_event = _.sortBy(late, function (score) {
                      return score.score_time
                    })

                    event = on_sorted_event.concat(off_sorted_event)
                    events.push(event)
                    event = []
                  }
                  that.setState({
                    events: events
                  })
                  events = that.state.events
                  let w = []
                  for (let j = 0; j < workouts.length; j++) {
                    const element = workouts[j];
                    for (let i = 0; i < events[j].length; i++) {
                      const score = events[j][i];
                      if(element.t1 === "time"){
                        w.push({id: score.id, score: score.score_time})
                      }else {
                        w.push({id: score.id, score: score.score_rep})
                      }
                    }
                    results.push(w)
                    w = []
                  }

                  let better_result = [];
                  let b_result = []
                  let r = that.state.results
                  let athletes = that.state.athletes
                  r.forEach(result => {
                    result.forEach(score => {
                        let id = score.id
                        athletes.forEach(athlete => {
                            if(athlete.id === id){
                              better_result.push({name: athlete.name, age: athlete.age, country: athlete.country, score: score.score})
                            }
                        });
                      });
                      b_result.push(better_result)
                      better_result = []
                  });

                  that.setState({
                    b_results: b_result
                  })


                //   athletes.forEach(athlete => {
                //       let rec = {name: athlete.name, age: athlete.age, country: athlete.country }
                //       let i = 0
                //       while (i < r.length) {
                //         let result = r[i]
                //         result.forEach(score => {
                //             if(score.id === athlete.id){
 
                //             }
                //         });
                //       }
                // });

                console.log(that.state)
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
    let scores = this.state.scores;
    let title = 'LEADERBOARD';
    return (
      <div className="Data">
        <NavigationBar bgColor='parent' />
        <h1 className="p-3">{title}</h1>
        <Form className="pb-0 pt-4 pl-4 pr-4">
          <Row>
        <Form.Group  id="col" className="font-weight-bold" as={Col} controlId="formGridYear">
            <Form.Label >Year</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Year
              </Dropdown.Toggle>

              <Dropdown.Menu > 
                <Dropdown.Item >Filter not impolemented yed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group id="col" className="font-weight-bold" as={Col} controlId="formGridCompetition">
            <Form.Label>Competition</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Competitions
              </Dropdown.Toggle>

              <Dropdown.Menu > 
                <Dropdown.Item >Filter not impolemented yed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group id="col" className="font-weight-bold"  as={Col} controlId="formGridDivision">
            <Form.Label>Division</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Divisions
              </Dropdown.Toggle>

              <Dropdown.Menu > 
                <Dropdown.Item >Filter not impolemented yed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group id="col" className="font-weight-bold"  as={Col} controlId="formGridCountry">
            <Form.Label>Country</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Country
              </Dropdown.Toggle>

              <Dropdown.Menu > 
                <Dropdown.Item >Filter not impolemented yed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          </Row>
        </Form>
        <TableComp data={scores}/>
      </div>
    );

  }
  
}

export default Data;
