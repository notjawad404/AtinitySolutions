import React, { Component } from 'react'
import Navbar1 from '../common/Navbar1'
import Footer from '../common/Footer'
import ServicesDiv1 from '../services/ServicesDiv1'
import ServicesDiv2 from '../services/ServicesDiv2Row'

export default class Services extends Component {
  render() {
    return (
      <div>
        <Navbar1/>
        <ServicesDiv1/>
        <ServicesDiv2/>
        <Footer/>
      </div>
    )
  }
}
