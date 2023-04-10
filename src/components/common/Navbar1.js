import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/master.css'
import './Navbar1.css'
import {Link} from 'react-router-dom';
import logo1 from '../images/logo.jpg';

    function Navbar1() {
      const [isFixed, setIsFixed] = useState(false);
    
        useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset;
          setIsFixed(scrollTop > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
      <div>
        <Navbar expand="lg" className={`navbar ${isFixed ? 'fixed' : ''}`}>
          <Container fluid>
            <Navbar.Brand><img className='navimg' src={logo1} alt="Logo" /></Navbar.Brand>
            <Navbar.Brand href="#"><span>Atinity<br></br> Solution</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Container className=" d-flex justify-content-end">
                <Nav>
                  <Nav.Link href="#deets">Home</Nav.Link>
                  <Nav.Link href="#deets">About Us</Nav.Link>
                  <Nav.Link href="#deets">Services</Nav.Link>
                  <Nav.Link href="#deets">Projects</Nav.Link>

                </Nav>
              </Container>
              <Nav.Link to='../form/Login'><Button className='navbtn rounded-pill ' variant="outline-success"  onClick={<Link to="../form/Login"/>} >GET IN TOUCH</Button></Nav.Link>

              

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }


export default Navbar1;
