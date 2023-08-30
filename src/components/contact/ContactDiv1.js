import React, { Component } from 'react'
import contact from '../images/contact/contact.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import './contact.css'
import { Col, Container, Row } from 'react-bootstrap'


export default class ContactDiv1 extends Component {
  render() {
    return (
      <div className='justify-content-center text-center pt-5'>
      
      <img className="img-fluid pic1" src={contact} alt='Contact'/>
      <p className='mb-5 w-50 m-auto'>At ATINITY, we value your feedback and are always here to help with any questions or concerns. Please reach out to us.</p>
      <Container >
        <Row>
            <Col sm={4} lg={4} >
        <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
            <p>atinitysol@gmail.com</p>
            </Col>
            <Col sm={4} lg={4} >
<FontAwesomeIcon icon={faPhone} className="phone-icon" style={{ color: 'red' }} />
                <p>+92 323-6572961</p>
            </Col>
            <Col sm={4} lg={4} >

            <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" />
            <p>E-11 Islamabad, Pakistan</p>
            </Col>

        </Row>
      </Container>

      </div>
    )
  }
}
