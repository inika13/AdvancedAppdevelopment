import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/login.css"

function Register() {
  const [username, setUsername] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      username.trim() === '' ||
      mobileNo.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      setErrorMessage('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      console.log('Username:', username);
      console.log('Mobile Number:', mobileNo);
      console.log('Email:', email);
      console.log('Password:', password);
      setUsername('');
      setMobileNo('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
    }
  };

  return (
    <div className='body1'>
      <div className='layout12'>
        <div className='rectangle'></div>
        <div className='login1'>
          <b>JOIN WITH US !!</b>
        </div>
        <br />
        <div className='form1'>
          <form onSubmit={handleRegister}>
            Username: <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br />
            <br />
            Mobile No: <input type="text" id="mobileNo" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} placeholder="Mobile No" /><br />
            <br />
            Email: <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br />
            <br />
            Password: <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br />
            <br />
            Confirm Password: <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" /><br />
            <br />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <h5><button type="submit" className='but'>REGISTER</button></h5><br /><br />
            <h4><center>Already have an account?</center></h4><br />
            <h5><Link to='/Login'><button type="button" className='but'>LOGIN</button></Link></h5><br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
