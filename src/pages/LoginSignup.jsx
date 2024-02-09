import React from 'react'
import  '../pages/css/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='your name' />
          <input type='email' placeholder='your email' />
          <input type='password' placeholder='your password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?<span>login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          By Continuing, i agree to the terms of use & privacy policy
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
