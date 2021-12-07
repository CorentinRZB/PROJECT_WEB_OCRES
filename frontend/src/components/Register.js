import React, { useState } from 'react';
import axios from 'axios';
import '../style/components/_register.scss';

//import './Register.css';

function Register() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePost = async (e) => {
    e.preventDefault();
    const result = await axios.post('http://localhost:3000/users/', { firstname, lastname, email, password });
    console.log(result);
  };
  return (
    <div className="container-register">
      <h1>REGISTER</h1>
      <form className="form-register" onSubmit={(e) => handlePost(e)}>
        <input type="text" value={firstname} placeholder="Firstname" onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" value={lastname} placeholder="Lastname" onChange={(e) => setLastName(e.target.value)} />
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default Register;
