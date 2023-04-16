import React, { Component } from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import circle from '../images/services/circle.jpg'

export default class ServicesDiv1 extends Component {
  render() {
    return (
      <div>
        <div className='mt-4'>.</div>
        <div className='mt-5'>
            <h1 className='text-center'>Our process</h1>
            <Container className='mt-5'>
                <Row  className='justify-content-center text-center my-3'>
                    <Col sm={4} lg={4}>
                        <img src={circle} alt="Cirlce" width='150px' height='150px' />
                        <h3 className='mt-5'>Understanding/ Developing Strategy</h3>
                    </Col>
                    <Col sm={4} lg={4}>
                    <img src={circle} alt="Cirlce" width='150px' height='150px' />
                    <h3 className='mt-5'>Design & Software Development</h3>
                    </Col>
                    <Col sm={4} lg={4}>
                    <img src={circle} alt="Cirlce" width='150px' height='150px' />
                    <h3 className='mt-5'>Automated Testing & Support</h3>
                    </Col>
                </Row>
            </Container>
        </div>
      </div>
    )
  }
}
