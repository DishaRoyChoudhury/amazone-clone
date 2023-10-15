import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase';

function Login() {

  const navigate = useNavigate();
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const signIn = e => {
    e.preventDefault();

    // firebase login
    auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate("/");
        })
        .catch(error => alert(error.message))
  }
  const register = e => {
    e.preventDefault();

    // forebase register
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //it successfully created a new user with email and password
            console.log(auth);
            if(auth){
                navigate("/");
            }
        })
        .catch(error => alert(error.message))
  }
  
  return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt='amazoneLogo'/>
        </Link>
        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button type ='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon Clone Conditions of Use & Sale.
                Please see our Privacy Notice, our Cookies Notice and our Internet based Ads Notice.
            </p>
            <button onClick={register} className='login_registerButton'>Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login