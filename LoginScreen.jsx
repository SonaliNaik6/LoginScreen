import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

function LoginScreen() {
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  return (
    <div  className='box'>
        <h1>Login</h1><br></br>
      <h2>Enter Mobile Number</h2>
      <input
        type="text"
        maxLength={10}
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter mobile number"
      />
      <br /><br />
      <button onClick={() => navigate('/otp', { state: { mobile } })}>Send OTP</button><br></br>
      <button onClick={() => navigate('/reg')}>Registration</button>
    </div>
  );
}

export default LoginScreen;
