import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './services.css'

export default class ServicesDiv2Props extends Component {
  render() {
    const rows = this.props;
    return (
      <div>
        <Container>
          { rows.map((row, index )=>(
            <Row key={index} className='mt-4'>
              {
                rows.columns.map((column, index)=>{
                  return (
                    <><Col key={index} sm={6} lg={8} className='w-50 m-auto'>
                      <h4>{column.title}</h4>
                      <p>{column.description}</p>
                    </Col>
                      <Col key={index} sm={6} lg={4}>
                        <img src={column.image} alt={column.title} className='servicesimgs' />
                      </Col></>
                  );
                })
              }
            </Row>
          ))

          }
        </Container> 
      </div>
    )
  }
}
