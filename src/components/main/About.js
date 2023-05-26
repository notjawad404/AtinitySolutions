import React, { Component } from 'react'
import Navbar1 from '../common/Navbar1'
import Footer from '../common/Footer'
import AboutDiv1 from '../about/AboutDiv1'
import AboutDiv2 from '../about/AboutDiv2'
import './animation.css'


export default class About extends Component {
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
        <AboutDiv1/>
        <AboutDiv2/>
        <Footer/>
      </div>
    )
  }
}
