import React, { useState } from 'react';

function Forms() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ firstName, lastName, email, message });
  };

  return (
    <div style={{backgroundColor: 'WHITE'}}>


    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="firstName" style={{ marginRight: '10px' }}>First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="lastName"  style={{ marginRight: '10px' }}>Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="email"  style={{ marginRight: '40px' }}>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="message" style={{}}>Message:</label>
        <br></br>
        <textarea  style={{ width: '100%', height: '100px' }}
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Forms;