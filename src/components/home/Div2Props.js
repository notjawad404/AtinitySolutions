import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './master.css'

export default class Div2Props extends Component {
  render() {
    const { rows } = this.props;
    return (
      <div>
        <Container>
          {rows.map((row, index) => (
            <Row key={index} className='justify-content-center text-center my-3'>
              {row.columns.map((column, index) => (
                <Col key={index} sm={6} md={6} lg={3} className='mx-2 px-2' width="400px" height="400px">
                  <div className='box'>
                    <img src={column.image} alt={column.title} />
                    <h3>{column.title}</h3>
                    <p>{column.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </Container>
        <br></br>
      </div>
    );
  }
}