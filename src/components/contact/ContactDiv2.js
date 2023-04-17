import React, { Component } from 'react'
import Forms from '../form/EmailForm'

export default class ContactDiv2 extends Component {
  render() {
    return (
      <div>
      <div>
      <p className='text-center w-50 m-auto my-5'>Fill out our online form and one of our customer support representatives will get back to you as soon as possible.</p>
      </div>
      <div>
        <Forms/>
      </div>
      </div>
    )
  }
}
