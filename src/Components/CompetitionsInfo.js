import React, {Component} from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import '../Style/CompetitionsInfo.scss'


class CompetitionsInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      competitions: [],
      compName: [],
    }
  }



  render() {
    let competition = this.props.data;
    return (
      <div className="PartnersInfo">
       <h4>{competition.name}</h4>
       <h6 className="text-muted">{competition.company}</h6>
       <Form>
       <Form.Group as={Row} className="m-0" controlId="formHorizontalVenu">
            <Form.Label className='font-weight-bold' column sm={5}>
            <p className='m-0 text-left'>Venu</p>
            </Form.Label>
            <Col sm={7}>
                <p className='m-0 text-right'>{competition.venu}</p>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="m-0" controlId="formHorizontalCategory">
            <Form.Label className='font-weight-bold' column sm={5}>
            <p className='m-0 text-left'>Category</p>
            </Form.Label>
            <Col sm={7}>
                <p className='m-0 text-right'>{competition.category}</p>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="m-0" controlId="formHorizontalStart">
            <Form.Label className='font-weight-bold' column sm={5}>
            <p className='m-0 text-left'>Start date</p>
            </Form.Label>
            <Col sm={7}>
                <p className='m-0 text-right'>{competition.start_date_time.substr(0, 10)} at {competition.start_date_time.slice(11, 19)} AM</p>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="m-0" controlId="formHorizontalEnd">
            <Form.Label className='font-weight-bold' column sm={5}>
            <p className='m-0 text-left'>End date</p>
            </Form.Label>
            <Col sm={7}>
            <p className='m-0 text-right'>{competition.end_date_time.substr(0, 10)} at {competition.end_date_time.slice(11, 19)} AM</p>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="m-0" controlId="formHorizontalDuration">
            <Form.Label className='font-weight-bold' column sm={5}>
            <p className='m-0 text-left'>Duration</p>
            </Form.Label>
            <Col sm={7}>
                <p className='m-0 text-right'>{(competition.duration.years) ? `${competition.duration.years} years,` : ""} {(competition.duration.months) ? `${competition.duration.months} months and` : ""}  {(competition.duration.days) ? `${competition.duration.days} days` : ""}</p>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="m-0" controlId="formHorizontalContactPhone">
            <Form.Label className='font-weight-bold' column sm={5}>
            <p className='m-0 text-left'>Contact phone</p>
            </Form.Label>
            <Col sm={7}>
                <p className='m-0 text-right'>{competition.contact_phone}</p>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="m-0" controlId="formHorizontalContactEmail">
            <Form.Label className='font-weight-bold' column sm={5}>
            <p className='m-0 text-left'>Contact email</p>
            </Form.Label>
            <Col sm={7}>
                <p className='m-0 text-right'>{competition.contact_email}</p>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="m-0" controlId="formHorizontalAddress">
            <Form.Label className='font-weight-bold' column sm={5}>
                <p className='m-0 text-left'>Address</p>
            </Form.Label>
            <Col sm={7}>
                <p className='m-0 text-right'>{competition.address_line+", "+ competition.city+", "+competition.state.trim() + ", " + competition.zip}</p>
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-0" controlId="formHorizontalAddress">
            <Form.Label className='font-weight-bold' column sm={5}>
            <p className='m-0 text-left'>Rules</p>
            </Form.Label>
            <Col  sm={7}>
                <p className='m-0 text-right'>Maximum male : {competition.max_male}</p>
                <p className='m-0 text-right'>Maximum female : {competition.max_female}</p>
                <p className='m-0 text-right'>Number of events: {competition.number_of_events}</p>
            </Col>
        </Form.Group>
        </Form>
      </div>
    );

  }
  
}

export default CompetitionsInfo;