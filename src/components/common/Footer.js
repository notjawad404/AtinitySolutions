import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
import Atinity from '../images/common/atinity.png'
import lindenin from '../images/common/linkedin.png'
import github from '../images/common/GitHub.png'
import upwork from '../images/common/upwork.png'
import fiverr from '../images/common/fiverr.png'



export default class Footer extends Component {
  render() {
    return (
      <div className='mt-2'>
        <div className='bg1'>
        <Container>
      <Row className='justify-content-center text-center p-1'>
      <Col sm={4} md={4}>
          <img src={Atinity} width="100px" alt="Atinity"/>
          <h3>Atinity</h3>
          <p>Solutions</p>
      </Col>
        <Col sm={4} md={4}>
          <ul className="list-unstyled">
            <li className='p-1'>Home</li>
            <li className='p-1'>About</li>
            <li className='p-1'>Services</li>
            <li className='p-1'>Projects</li>
            <li className='p-1'>Get in Touch</li>
          </ul>

          <p>
          <img src={lindenin} className='img1 m-2' alt="linkedin"/>
          <img src={github} className='img1 m-2' alt="linkedin"/>
          <img src={upwork} className='img1 m-2' alt="linkedin"/>
          <img src={fiverr} className='img1 m-2' alt="linkedin"/>
          </p>
        </Col>

        <Col sm={4} md={4}>
            <div>
              <h3>Keep in Touch</h3>
              <div className="input-wrapper">
        <input type="email" id="email" placeholder="Enter your email address" />
      </div>
            </div>

        </Col>
      </Row>
    </Container>
        </div>
      </div>
    )
  }
}
