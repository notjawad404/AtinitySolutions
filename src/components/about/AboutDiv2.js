import React, { Component } from 'react'
import './about.css'
import divpic2 from '../images/about/div2pic2.jpg'


export default class AboutDiv2 extends Component {
    render() {
        return (
            <div className='text-center align-content-center justify-content-center'>
                <div className='div2'>
                    <h1>Our Values</h1>
                    <p>
                        <span>
                            Innovation
                        </span>
                        <br></br>
                        We continuously strive to find new and better ways to serve our clients
                    </p>
                    <p>
                        <span>
                            Excellence
                        </span>
                        <br></br>
                        We are committed to delivering high-quality solutions that meet or exceed our client's expectations.
                    </p>

                    <p>
                        <span>
                            Partnership
                        </span>
                        <br></br>
                        We believe in building strong and lasting relationships with our clients based on mutual trust and respect.
                    </p>
                    <p>
                        <span>
                            Responsibility
                        </span>
                        <br></br>
                        We take our responsibility to our clients, employees, and the wider community seriously and always act with integrity.
                    </p>
                    <p>
                        <span>
                            Agility
                        </span>
                        <br></br>
                        We respond quickly and effectively to the changing needs of our clients and the market.
                    </p>
                    <p>
                        <span>
                            Collaboration
                        </span>
                        <br></br>
                        We work together as a team, encouraging open communication and sharing ideas to drive our success.

                    </p>
                    <p>
                        <span>
                            Empowerment
                        </span>
                        <br></br>
                        We empower our employees to take ownership of their work, fostering a culture of creativity, learning and growth.

                    </p>
                    <img src={divpic2} alt='Our-Values' className='aboutpics'></img>
                </div>
            </div>
        )
    }
}
