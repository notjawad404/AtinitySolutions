import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './master.css'

import android from '../images/home/android.jpg'
import web from '../images/home/web.jpg'
import uiux from '../images/home/uiux.jpg'
import solution from '../images/home/solution.jpg'
import crossplatform from '../images/home/crossplatform.jpg'
import cloud from '../images/home/cloud.jpg'

export default class Div2 extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className='justify-content-center text-center my-3'>
            <Col sm={8} lg={3} className='mx-2' width="400px" height="400px">
              <div className='box'>
                <img src={android} alt="android" />
                <h3>App Development</h3>
                <p>Comprehensive app development services to streamline information access and improve productivity through innovative and synchronized solutions</p>
                </div>
            </Col>
            <Col sm={8} lg={3} className='mx-2' width="400px" height="400px">
            <div className='box'>
            <img src={web} alt="web" />
                <h3>Web Development</h3>
                <p>Custom, efficient, and user-friendly solutions for businesses to enhance their online presence and reach their goals seamlessly</p>
              </div>
            </Col>
            <Col sm={8} lg={3} className='mx-2' width="400px" height="400px">
            <div className='box'>
                <img src={uiux}  alt=""/>
                <h3>UI/UX</h3>
                <p>Focused on creating user-centered digital experiences to enhance overall usability and engagement with clients' products</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
          <Row className='justify-content-center text-center my-3'>
          <Col sm={8} lg={3} className='mx-2' width="400px" height="400px">
            <div className='box'>
            <img src={crossplatform}  alt=""/>
                <h3>Cross Platform Development</h3>
                <p>Seamless cross-platform development services to help businesses effectively reach their audiences on multiple devices and platforms</p>
              </div>
            </Col>
            <Col sm={8} lg={3} className='mx-2' width="400px" height="400px">
            <div className='box'>
            <img src={solution}  alt=""/>
                <h3>Solution Designing</h3>
                <p>Providing clients with customized and innovative solutions to meet their specific business needs and challenges</p>
              </div>
            </Col>
            <Col sm={8} lg={3} className='mx-2' width="400px" height="400px">
            <div className='box'>
            <img src={cloud}  alt="cloud"/>
                <h3>Cloud Computing</h3>
                <p>Delivering scalable, secure, and cost-effective cloud-based solutions to help clients optimize their IT infrastructure and operations</p>
              </div>
            </Col>
          </Row>
        </Container>
        <br></br>
      </div>
    );
  }
}
