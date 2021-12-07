import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';  //permet d'être rediriger sur une route
import '../style/components/_login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const handlePost = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post('http://localhost:3000/login', { email, password });
      localStorage.setItem('token', result.headers.accesstoken);
      history.push('/users');
    } catch (err) {
      history.push('/');
    }
  };

  return (
    <div className="container-login">
      <h1>LOGIN</h1>
      <form className="form-login" onSubmit={(e) => handlePost(e)}>
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">LOG IN</button>
      </form>
    </div>
  );
}

export default Login;
