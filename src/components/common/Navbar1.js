import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/master.css'
import './Navbar1.css'
import logo1 from '../images/common/atinity.png';



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
            <Navbar.Brand href="#">Atinity{"\n"} Solution</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Container className=" d-flex justify-content-end">
                <Nav>
                  <Nav.Link href="/Home" >Home</Nav.Link>
                  <Nav.Link href="/About">About Us</Nav.Link>
                  <Nav.Link href="/Services">Services</Nav.Link>
                  <Nav.Link href="/Home">Projects</Nav.Link>

                </Nav>
              </Container>
              <Nav.Link href="/Contact"><Button className='navbtn rounded-pill ' variant="outline-success"  onClick="/App" >GET IN TOUCH</Button></Nav.Link>

              

            </Navbar.Collapse>
          </Container>
        </Navbar>
        
      </div>
    )
  }


export default Navbar1;
