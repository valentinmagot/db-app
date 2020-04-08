import React, {Component} from 'react';
import NavigationBar from './NavigationBar'
import { Row, ListGroup, Tab, Col } from 'react-bootstrap';
import '../Style/Competition.scss'
import Info from '../Components/CompetitionsInfo'


class Competitions extends Component {

  constructor(props){
    super(props);
    this.state = {
      competitions: [],
    }
  }

  // MAKES AJAX CALL
  componentDidMount() {
    console.log("COMPONENT HAS MOUNTED");
    var that = this;
    fetch('http://localhost:3001/competitionsInfos')
          .then(function(response){
            response.json().then(function(data){
                console.log(data);
                if(data.name !== 'error'){
                  that.setState({
                    competitions: data,
                  })
                }
                
            })
          })
  }
      

  render() {
    return (
      <div className="page">
        <NavigationBar bgColor='parent' />
        <h3 className="text-center p-5">Get some information about our partners competitions...</h3>
        <div className='content' >
        <Tab.Container >
          <Row className="h-100">
            <Col className="align-self-center" sm={4}>
              <ListGroup id='group'>{ this.state.competitions.map((competitions,index)  => <ListGroup.Item bsPrefix='reg-button' action key={index} href={"#" + competitions.name}>{competitions.name}</ListGroup.Item>) }
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content className="p-3">
              { this.state.competitions.map((competitions, index) => <Tab.Pane key={index} eventKey={"#" + competitions.name}><Info data={competitions}/></Tab.Pane>) }
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
          </div>
      </div>
    );

  }
  
}

export default Competitions;