import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from '../common/Navbar1'
import Header from '../home/Header'
import '../home/master.css'
import Div1 from '../home/Div1';
import Div2 from '../home/Div2';
import Footer from '../common/Footer';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar1/>
        <Header/>
        <Div1/>
        <Div2/>
        <Footer/>
      </div>
    )
  }
}
