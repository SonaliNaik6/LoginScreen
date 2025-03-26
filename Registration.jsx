import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import "./Otp.css";

function RegistrationScreen() {
  const location = useLocation();
  const navigate = useNavigate();
//   const mobile = location.state?.mobile || '';
  const [reg, setReg] = useState('');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Registration Form</h2>
      <input
        type="text"
        onChange={(e) => setReg(e.target.value)}
        placeholder="Enter The First Name"
      />
      <input
        type="text"
        onChange={(e) => setReg(e.target.value)}
        placeholder="Enter The Last Name"
      />
       <input
        type="email"
        onChange={(e) => setReg(e.target.value)}
        placeholder="Enter The Email"
      />
      <br /><br />
      <button onClick={() => navigate('/Login')}>Register</button>
    </div>
  );
}

export default RegistrationScreen;

