import React, { Component } from 'react'
import { BrowserRouter as Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from '../common/Navbar1';
import Login from '../form/Login'
import SignUp from '../form/Signup'
import './touch.css'

export default class GetinTouch extends Component {
  render() {
    return (
      <div>
      <Navbar1/>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    )
  }
}
