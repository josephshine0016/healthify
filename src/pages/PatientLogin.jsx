import React, { useState } from 'react'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../firebase';

import './patient-login.css'

const PatientLogin = (props) => {
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
      user && navigate("/patient-dashboard");
    }

  }

  return (
    <div className="patient-login-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="patient-login-patient-login">
        <img
          src="/playground_assets/rectangle121117-gki-1100h.png"
          alt="Rectangle121117"
          className="patient-login-rectangle121"
        />
        <img
          src="/playground_assets/rectangle1531106-z579-200h.png"
          alt="Rectangle1531106"
          className="patient-login-rectangle153"
        />
        <img
          src="/playground_assets/rectangle1551125-8c6-200h.png"
          alt="Rectangle1551125"
          className="patient-login-rectangle155"
        />
        <img
          src="/playground_assets/rectangle1541107-1md4-200h.png"
          alt="Rectangle1541107"
          className="patient-login-rectangle154"
        />
        <img
          src="/playground_assets/rectangle1561126-z49d-200h.png"
          alt="Rectangle1561126"
          className="patient-login-rectangle156"
        />
        <span className="patient-login-text">
          <span>Login</span>
        </span>
        <span className="patient-login-text02" onClick={handleSubmit}>
          <span>Login</span>
        </span>
        <span className="patient-login-text04" onClick={() => navigate("/signup-patient")}>
          <span>Sign Up</span>
        </span>
        <div className="patient-login-frame138" >
          <div className="patient-login-frame137">
            <div className="patient-login-frame136">
              <span className="patient-login-text06">
                <span>Login</span>
              </span>
            </div>
          </div>
          <div className="patient-login-group117">
            <span className="patient-login-text08">
              <span>EMAIL ID</span>
            </span>
            <img
              src="/playground_assets/line1811118-zaxn.svg"
              alt="Line1811118"
              className="patient-login-line181"
            />
          <input className="patient-login-text14" placeholder='email' onChange={e => setEmail(e.target.value)}/>
          <div style={{color: 'red', marginLeft: 220, marginTop: 40}}>
              {error}
            </div>
          </div>
        </div>
        <div className="patient-login-group119">
          <span className="patient-login-text12">
            <span>PASSWORD</span>
          </span>
          <img
            src="/playground_assets/line1831123-tq2b.svg"
            alt="Line1831123"
            className="patient-login-line183"
          />

          <input className="patient-login-text14" placeholder='enter password' type="password" onChange={e => setPassword(e.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default PatientLogin
