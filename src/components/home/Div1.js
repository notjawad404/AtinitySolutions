import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './master.css'
import homepic1 from '../images/home/homeimg1.jpg'
import homepic2 from '../images/home/homeimg2.jpg'
import homepic3 from '../images/home/homeimg3.jpg'

export default class Div1 extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className='m-3'>
                    <Col sm={2} md={2}>

</Col>
                        <Col sm={8} lg={6}>
                            <div className='text-center w-75 my-3 ml-5'>
                                <h3 className='mb-3'>Scalable, Secure, and Reliable Software Solutions</h3>
                                <p className='mb-3'>We believe in proiding soutions that grow with your business. Our software is design to be scalable, secure, and reliable ensuring that you can meet the changing demands of your business with ease
                                </p>
                                <Button variant='primary'>Explore More</Button>
                            </div>

                        </Col>
                        <Col sm={6} md={6} lg={4}>
                            <div className="d-flex">
                                <img src={homepic1} width="100%" alt="Pic1" className="float-left"></img>

                            </div>
                        </Col>
                    </Row>
                    <Row className='m-3'>
                        <Col sm={2} md={2}>

                        </Col>
                        <Col sm={6} md={6} lg={4}>
                            <div className='text-center my-3 mx-auto'>
                                <img src={homepic2} width="100%" alt="Pic1"></img>

                            </div>
                        </Col>
                        <Col sm={2} md={1}>

                        </Col>
                        <Col sm={7} md={4}>
                            <div className='text-center my-3 mx-auto'>
                                <h3 className='mb-3'>Transform Your Business with Atinity's Expertise</h3>
                                <p className='mb-3'>We are here to hep you unlock your business's full potential with our innovative solutions, skilled professionals and commitment to customer service. Atinty is the partner you need to drive your business success
                                </p>
                                <Button variant='primary'>Explore More</Button>
                            </div>

                        </Col>


                        <Col sm={2} md={1}>

                        </Col>
                    </Row>
                    <Row className='m-3'>
                        <Col sm={2} md={2}>

                        </Col>
                        <Col sm={7} md={4}>
                            <div className='text-center my-3 mx-auto'>
                                <h3 className='mb-3'>A Team of Skilled Professionals at Your Service</h3>
                                <p className='mb-3'>Our team is dedicated to helping our clients achieve their goals whether you need a custom software solution, helo with a design or need attractive web or app, we are here to help.
                                </p>
                                <Button variant='primary'>Explore More</Button>
                            </div>

                        </Col>
                        <Col sm={2} md={1}>

                        </Col>
                        <Col sm={6} md={6} lg={4}>
                            <div className='text-center my-3 mx-auto'>
                                <img src={homepic3} width="100%" alt="Pic1"></img>

                            </div>
                        </Col>

                        <Col sm={2} md={1}>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
