import React, { Component } from 'react'
import Navbar1 from '../common/Navbar1'
import Footer from '../common/Footer'
import ContactDiv1 from '../contact/ContactDiv1'
import ContactDiv2 from '../contact/ContactDiv2'
import { ContactUs } from '../form/EmailForm'
// import {EmailForm} from '../form/EmailForm'
import './animation.css'


export default class Contact extends Component {

  state = {
    animate: false
  };

  componentDidMount() {
    this.setState({ animate: true });
  }
  render() {
    const { animate } = this.state;
    return (
      <div className={`page ${animate ? "fade-in" : ""}`}>
        <Navbar1/>
        <ContactDiv1/>
        <ContactDiv2/>
        <ContactUs/>
        <Footer/>

      </div>
    )
  }
}
