import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from '../common/Navbar1'
import Header from '../home/Header'
import Div1 from '../home/Div1';
import Div2 from '../home/Div2';
import Footer from '../common/Footer';
import './animation.css'


export default class Home extends Component {
  state = {
    animate: false
  };

  componentDidMount() {
    this.setState({ animate: true });
  }
  render() 
  {
    const { animate } = this.state;
    return (
      <div className={`page ${animate ? "fade-in" : ""}`}>
        <Navbar1/>
        <Header/>
        <Div1/>
        <Div2/>
        <Footer/>
      </div>
    )
  }
}
