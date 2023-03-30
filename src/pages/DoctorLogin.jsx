import React, { useState } from 'react'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../firebase';

import './doctor-login.css'

const DoctorLogin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const user = await loginUser(email, password);
    console.log(user);
    if (typeof user == 'string')
        setError(user);
    else {
      localStorage.setItem("email", email);
      localStorage.setItem("type", "doctor");
      user && navigate("/doctor-dashboard");
    }

  }
  return (
    <div className="doctor-login-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="doctor-login-doctor-login">
        <img
          src="/playground_assets/rectangle1216220-cu0u-1100h.png"
          alt="Rectangle1216220"
          className="doctor-login-rectangle121"
        />
        <img
          src="/playground_assets/rectangle1536221-a6oh-200h.png"
          alt="Rectangle1536221"
          className="doctor-login-rectangle153"
        />
        <img
          src="/playground_assets/rectangle1556221-fk5g-200h.png"
          alt="Rectangle1556221"
          className="doctor-login-rectangle155"
        />
        <img
          src="/playground_assets/rectangle1546221-k5zc-200h.png"
          alt="Rectangle1546221"
          className="doctor-login-rectangle154"
        />
        <img
          src="/playground_assets/rectangle1566221-cbvg-200h.png"
          alt="Rectangle1566221"
          className="doctor-login-rectangle156"
        />
        <span className="doctor-login-text">
          <span>Login</span>
        </span>
        <span className="doctor-login-text02" onClick={handleSubmit}>
          <span>Login</span>
        </span>
        <span className="doctor-login-text04" onClick={() => navigate("/signup-doctor")}>
          <span>Sign Up</span>
        </span>
        <div className="doctor-login-frame138">
          <div className="doctor-login-frame137">
            <div className="doctor-login-frame136">
              <span className="doctor-login-text06">
                <span>Login</span>
              </span>
            </div>
          </div>
          <div className="doctor-login-group117">
            <span className="doctor-login-text08">
              <span>EMAIL ID</span>
            </span>
            <span className="doctor-login-text10">
              <span>OR</span>
            </span>
            <img
              src="/playground_assets/line1816222-8d5o.svg"
              alt="Line1816222"
              className="doctor-login-line181"
            />
            
            <input className="doctor-login-text12" placeholder='email'onChange={e => setEmail(e.target.value)}/>
          <div style={{color: 'red', marginLeft: 220, marginTop: 40}}>
              {error}
            </div>
          </div>
        </div>
        <div className="doctor-login-group119">
          <span className="doctor-login-text14">
            <span>PASSWORD</span>
          </span>
          <img
            src="/playground_assets/line1836222-9zyp.svg"
            alt="Line1836222"
            className="doctor-login-line183"
          />
          
            <input className="doctor-login-text16" placeholder='enter password' type="password" onChange={e => setPassword(e.target.value)}/>
         
        </div>
      </div>
    </div>
  )
}

export default DoctorLogin
