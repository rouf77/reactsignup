import React from 'react'
import './LoginSignup.css'
import { useState } from 'react'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");

    return (
      <div className='container'>
        <div className='header'>
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="User Icon" />
            <input type="text" placeholder="Username" className="text-input" />
          </div>}
          
  
          <div className="input">
            <img src={email_icon} alt="Email Icon" />
            <input type="email" placeholder="Email" className="email-input" />
          </div>
  
          <div className="input">
            <img src={password_icon} alt="Password Icon" />
            <input type="password" placeholder="Password" className="password-input" />
          </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot password? <span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

        </div>
      </div>
    )
  }
  
  export default LoginSignup;
  