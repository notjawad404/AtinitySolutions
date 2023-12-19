import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/master.css'
import './Navbar1.css'
import logo1 from '../images/common/atinity.png';

import { Link  } from 'react-router-dom';


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
      <div className='mb-5'>
        <Navbar expand="lg" className={`navbar ${isFixed ? 'fixed' : ''}`}>
          <Container fluid>
            <Navbar.Brand><img className='navimg' src={logo1} alt="Logo" /></Navbar.Brand>
            <Navbar.Brand href="#">Atinity{"\n"} Solutions</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Container className=" d-flex justify-content-end">
                <Nav>
                  <Link className='link1 mx-2' to="/" >Home</Link>
                  <Link className='link1 mx-2' to="/About">About</Link>
                  <Link className='link1 mx-2' to="/Services">Services</Link>

                </Nav>
              </Container>
              <Link to="/Contact"><Button className='navbtn rounded-pill ' variant="outline-success">GET IN TOUCH</Button></Link>

              

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }


export default Navbar1;
