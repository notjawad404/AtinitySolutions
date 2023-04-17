import React, { Component } from 'react';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <div style={{ backgroundColor: 'WHITE' }}>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="firstName" style={{ marginRight: '10px' }}>First Name:</label>
            <input
              type="text"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="lastName" style={{ marginRight: '10px' }}>Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{ marginRight: '40px' }}>Email:</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="message" style={{}}>Message:</label>
            <br></br>
            <textarea style={{ width: '100%', height: '100px' }}
              id="message"
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
