import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import home1 from '../images/home/home1.jpg'

export default class Header extends Component {
    render() {
        return (
            <div>
            <div className='mb-3'>.</div>
                <div className="mb-3 text-center" width="100%">
                    <h1 className="font-purple header-intro">Empowering Your Business with Cutting-Edge Technology</h1>
                    <p className='header-p'>We believe in the power of technology to drive business growth and success. Our aim is to provide innovative
                        software solutions that streamline processes. improve efficiency ana enhance overall performance.
                    </p>
                    <img src={home1} width="70%" alt="img"/>
                    <br />
                </div>
            </div>
        )
    }
}
