import React, { Component } from 'react'
import Navbar1 from '../common/Navbar1'
import Footer from '../common/Footer'
import AboutDiv1 from '../about/AboutDiv1'
import AboutDiv2 from '../about/AboutDiv2'
export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar1/>
        <AboutDiv1/>
        <AboutDiv2/>
        <Footer/>
      </div>
    )
  }
}
