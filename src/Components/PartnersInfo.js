import React, {Component} from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import '../Style/PartnersInfo.scss'


class PartnersInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      competitions: [],
      compName: [],
    }
  }



  render() {
    let partner = this.props.data;
    return (
      <div className="PartnersInfo">
       <h4>{partner.company}</h4>
       <Form>
        <Form.Group as={Row} className="m-0" controlId="formHorizontalContactPerson">
            <Form.Label className='font-weight-bold' column sm={5}>
            <p className='m-0 text-left'>Contact person</p>
            </Form.Label>
            <Col sm={7}>
                <p className='m-0 text-right'>{partner.contact_firstname + " " +partner.contact_lastname}</p>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="m-0" controlId="formHorizontalContactPhone">
            <Form.Label className='font-weight-bold' column sm={5}>
            <p className='m-0 text-left'>Contact phone</p>
            </Form.Label>
            <Col sm={7}>
                <p className='m-0 text-right'>{partner.contact_phone}</p>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="m-0" controlId="formHorizontalContactEmail">
            <Form.Label className='font-weight-bold' column sm={5}>
            <p className='m-0 text-left'>Contact email</p>
            </Form.Label>
            <Col sm={7}>
                <p className='m-0 text-right'>{partner.contact_email}</p>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="m-0" controlId="formHorizontalAddress">
            <Form.Label className='font-weight-bold' column sm={5}>
            <p className='m-0 text-left'>Address</p>
            </Form.Label>
            <Col sm={7}>
                <p className='m-0 text-right'>{partner.address_line}</p>
                <p className='m-0 text-right'>{partner.city}</p>
                <p className='m-0 text-right'>{partner.state + ", " + partner.zip}</p>
            </Col>
        </Form.Group>
        </Form>
      </div>
    );

  }
  
}

export default PartnersInfo;