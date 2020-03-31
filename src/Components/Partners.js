import React, {Component} from 'react';
import NavigationBar from './NavigationBar'
import { Row, ListGroup, Tab, Col } from 'react-bootstrap';
import '../Style/Partners.scss'
import Info from '../Components/PartnersInfo'


class Partners extends Component {

  constructor(props){
    super(props);
    this.state = {
      partners: [],
    }
  }

  // MAKES AJAX CALL
  componentDidMount() {
    console.log("COMPONENT HAS MOUNTED");
    var that = this;
    fetch('http://localhost:3001/api/partners')
          .then(function(response){
            response.json().then(function(data){
                console.log(data);
                if(data.name !== 'error'){
                  that.setState({
                    partners: data,
                  })
                }
                
            })
          })
  }
      

  render() {
    return (
      <div className="page">
        <NavigationBar bgColor='parent' />
        <h3 className="text-center p-5">Get to know our proud partners...</h3>
        <div className='content' >
        <Tab.Container >
          <Row>
            <Col className="align-self-center" sm={4}>
              <ListGroup id='group'>{ this.state.partners.map((partners,index)  => <ListGroup.Item bsPrefix='reg-button' action key={index} href={"#" + partners.company}>{partners.company}</ListGroup.Item>) }
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content className="p-3">
              { this.state.partners.map((partners, index) => <Tab.Pane key={index} eventKey={"#" + partners.company}><Info data={partners}/></Tab.Pane>) }
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
          </div>
      </div>
    );

  }
  
}

export default Partners;