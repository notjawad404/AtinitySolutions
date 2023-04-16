import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './services.css'
import appdevelopment from '../images/services/appDevelopment.jpg'
import webdevelopment from '../images/services/webDevelopment.jpg'
import uiuxdevelopment from '../images/services/uiuxDesigning.jpg'
import solutiondesigning from '../images/services/solutionDesigning.jpg'
import cloudcomputing from '../images/services/cloudComputing.jpg'

export default class ServicesDiv2 extends Component {
    render() {
        return (
            <div>
                <div className='text-center my-3'>
                    <div>
                        <Container>
                            <Row className='mt-4'>
                                <Col sm={6} lg={8} className='w-50 m-auto'>
                                    <h4>App Development</h4>
                                    <p>
                                        Custom mobile app solutions to clients looking to enhance their business through technology. 
                                        Our team of expert developers and designers work closely with clients to understand their needs and create high-quality, user-friendly apps that bring their vision to life. 
                                        Utilizing the latest technologies and design trends, we deliver secure and scalable apps that meet clients' unique requirements and drive business success.
                                    </p>
                                </Col>
                                <Col sm={6} lg={4} >
                                    <img src={appdevelopment} alt='App-Development' className='servicesimgs' />
                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col sm={6} lg={8} className='w-50 m-auto'>
                                    <h4>Web Development</h4>
                                    <p>

                                        Creates custom web solutions that meet clients' unique requirements.
                                        Our team of experienced developers and designers deliver user-friendly and visually appealing web applications optimized for performance and scalability. 
                                        Committed to providing high-quality services, on-time and within budget.
                                    </p>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <img src={webdevelopment} alt="Web-Development" className='servicesimgs' />
                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col sm={6} lg={8} className='w-50 m-auto'>
                                    <h4>Ui/Ux Designing</h4>
                                    <p>
                                    Focus on improving the user experience and the visual design of software products. 
                                    The services combine research, design, and technology to create user-friendly and visually appealing software that meets customer needs and expectations.
                                    </p>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <img src={uiuxdevelopment} alt="UiUx-Development" className='servicesimgs' />
                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col sm={6} lg={8} className='w-50 m-auto text-center'>
                                    <h4>Solution Designing</h4>
                                    <p>
                                    To help clients develop and implement effective technology solutions for their specific business needs.
                                    These services include identifying problems, gathering requirements, creating functional specifications, and designing custom software solutions.
                                    </p>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <img src={solutiondesigning} alt="Solution-Designing" className='servicesimgs' />
                                </Col>

                            </Row>
                            <Row className='mt-4'>
                                <Col sm={6} lg={8} className='w-50 m-auto'>
                                    <h4>Cloud Computing</h4>
                                    <p>
                                    To help organizations move their IT infrastructure and applications to the cloud. 
                                    Cloud migration, cloud management, and cloud security, to help clients take advantage of the benefits of cloud computing, such as increased scalability, cost savings, and enhanced security
                                    </p>
                                </Col>
                                <Col sm={6} lg={4}>
                                    <img src={cloudcomputing} alt="Cloud-Computing" className='servicesimgs' />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}
