import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './services.css'
import servicesData from './ServicesDiv2'

const ServiceRow = ({ title, description, image, alt }) => {
    return (
      <Row className='mt-4'>
        <Col sm={6} lg={8} className='w-50 m-auto'>
          <h4>{title}</h4>
          <p>{description}</p>
        </Col>
        <Col sm={6} lg={4}>
          <img src={image} alt={alt} className='servicesimgs' />
        </Col>
      </Row>
    )
  }
  
  export default class ServicesDiv2 extends Component {
    render() {
      return (
        <div>
          <div className='text-center my-3'>
            <div>
              <Container>
                {/* map over the services data and render a ServiceRow for each service */}
                {servicesData.map((service, index) => (
                  <ServiceRow
                    key={index}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    alt={service.alt}
                  />
                ))}
              </Container>
            </div>
          </div>
        </div>
      )
    }
  }
  