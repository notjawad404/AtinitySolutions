import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <div className='mt-4'>
        <div>
        <Container>
      <Row>
      <Col sm={4} md={3}>

      </Col>
        <Col sm={8} md={5}>
          <ul className="list-unstyled">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
            <li>List item 4</li>
            <li>List item 5</li>
          </ul>
        </Col>
        <Col sm={6} md={4}>
            
        </Col>
      </Row>
    </Container>
        </div>
      </div>
    )
  }
}
