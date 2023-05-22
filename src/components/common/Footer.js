import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './footer.css';
import Atinity from '../images/common/atinity.png'
import lindenin from '../images/common/linkedin.png'
import github from '../images/common/GitHub.png'
import upwork from '../images/common/upwork.png'
import fiverr from '../images/common/fiverr.png'

import { Link } from 'react-router-dom';



export default class Footer extends Component {
  render() {
    return (
      <div className='mt-2'>
        <div className='bg1'>
          <Container>
            <Row className='justify-content-center text-center p-1'>
              <Col sm={4} md={4}>
                <img src={Atinity} width="100px" alt="Atinity" />
                <h3>Atinity</h3>
                <p>Solutions</p>
              </Col>
              <Col sm={4} md={4}>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className='p-2 link1'>Home</Link>
                  </li>
                  <li>
                    <Link to="/About" className='p-2 link1'>About</Link>
                  </li>
                  <li>
                    <Link to="/Services" className='p-2 link1'>Services</Link>
                  </li>
                </ul>

                <p>

                  <Link to="https://www.linkedin.com/company/atinity-sol">
                    <img src={lindenin} className='img1 m-2' alt="linkedin" />
                  </Link>
                  <Link to="https://github.com/Atinity">
                    <img src={github} className='img1 m-2' alt="github" />
                  </Link>
                  <Link to="https://www.upwork.com">
                    <img src={upwork} className='img1 m-2' alt="upwork" />
                  </Link>
                  <Link to="https://www.fiverr.com">
                    <img src={fiverr} className='img1 m-2' alt="fiverr" />
                  </Link>

                </p>
              </Col>

              <Col sm={4} md={4}>
                <div>
                  <h3>Keep in Touch</h3>
                  <div className="input-wrapper" width="200px">
                  <Link to="/Contact"><Button className='rounded-pill ' variant="outline-success" >Get in touch</Button></Link>
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
