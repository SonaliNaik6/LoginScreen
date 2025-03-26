import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Otp.css";

function OTPScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const mobile = location.state?.mobile || '';
  const [otp, setOtp] = useState('');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Enter OTP sent to {mobile}</h2>
      <input
        type="text"
        maxLength={6}
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <br /><br />
      <button onClick={() => navigate('/home')}>Submit</button>
    </div>
  );
}

export default OTPScreen;
