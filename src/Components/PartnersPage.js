import React, {Component} from 'react';
import NavigationBar from './NavigationBar'
import { Button, Form, Col } from 'react-bootstrap';
import '../Style/PartnersPage.scss'


class PartnersPage extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

      

  render() {

    return (
      <div className="page">
        <NavigationBar bgColor='parent' />
        <div className='content' >
        <Form>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label className="float-left">Secure Token</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter your secret token"
                    />
                    <Form.Control.Feedback>Token valid!</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <p className="divider-text">
                <span className="bg-white">And</span>   
            </p>
            <Form.Row className="text-left">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group className="text-left" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Row className="text-left">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
            <Button bsPrefix='reg-button' href={'/Data'} variant="outline-primary" >Register</Button>
            </Form>
          </div>
      </div>
    );

  }
  
}

export default PartnersPage;