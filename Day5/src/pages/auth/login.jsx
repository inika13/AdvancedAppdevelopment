import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import "../../assets/css/login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter both username and password.');
    } else {
      console.log('Username:', username);
      console.log('Password:', password);
      setUsername('');
      setPassword('');
      setErrorMessage('');
      navigate('/home'); 
    }
  };

  return (
    <div className='body1'>
      <div className='layout12'>
        <div className='rectangle'></div>
        <div className='login1'>
          <b>LOGIN</b>
        </div>
        <br />
        <div className='form1'>
          <form onSubmit={handleLogin}>
            Username: <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br />
            <br />
            Password: <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br />
            <br />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <h5><button type="submit" className='but'>LOGIN</button></h5><br />
            <h4><center>Don't have an account?</center></h4><br />
            <h5><Link to='/Register'><button type="button" className='but'>SIGNUP</button></Link></h5><br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
