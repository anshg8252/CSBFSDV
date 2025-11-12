import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({logData}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function verification(e){
    
    e.preventDefault();
    // console.log(logData.email);
    // alert("Hi " + email + " " + password);

    if(logData.email === email){
      if(logData.password === password){
        alert("Login Successful and navigating to Dashboard");
        navigate('/dashboard');
      }
      else{
        alert("Invalid Password");
      }
    }
    else{
      alert("Invalid Email");
    }
  }

  return (
    <div>
        <h2>Login Form</h2>
        <form onSubmit={verification}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button onClick={verification} type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login