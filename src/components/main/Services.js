import React, { Component } from 'react'
import Navbar1 from '../common/Navbar1'
import Footer from '../common/Footer'
import ServicesDiv1 from '../services/ServicesDiv1'
import ServicesDiv2 from '../services/ServicesDiv2Row'
import './animation.css'


export default class Services extends Component {
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
        <ServicesDiv1/>
        <ServicesDiv2/>
        <Footer/>
      </div>
    )
  }
}
