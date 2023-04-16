import React, { Component } from 'react'
import './about.css'
import divpic1 from '../images/about/div2pic1.jpg'


export default class AboutDiv1 extends Component {
  render() {
    return (
      <div className='justify-content-center text-center'>
        <div className='mt-5'>.</div>
        <div className='mt-5 div2'>
          <h2 className='pb-5'>Our Mission</h2>
          <div>
            <h3>To Revolutionize the Technology Landscape</h3>
            <p>
              Atinity Solutions is dedicated to delivering exceptional app and web services that empower businesses to achieve their goals and remain ahead of the competition. We strive to provide innovative, reliable, and user-friendly solutions that meet the evolving needs of our clients.
            </p>
          </div>
          <div>
            <h3>Innovate, Empower, Transform</h3>
            <p>
              Our vision is to be a leading provider of app and web services, recognized for our expertise and commitment to delivering exceptional results for our clients. We aim to continuously innovate and improve our services to stay ahead of the market and maintain our position as a trusted partner for businesses worldwide.
            </p>
          </div>
        </div>
        <img src={divpic1} alt="Our-Mission" width='535px' height='375px' />
      </div>
    )
  }
}
