import React, { useState } from 'react'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';
import { createUser, setUserData } from '../firebase';

import './patient-signup.css'

const PatientSignup = (props) => {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const user = await createUser(email, password);
    console.log(user);
    if (password !== password2)
      setError("Re-check your password")
    else if (typeof user == 'string')
        setError(user);
    else {
      user && await setUserData({email, fullname, phone, type: 'patient'});
      user && navigate("/login-patient");
    }

  }

  return (
    <div className="patient-signup-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="patient-signup-patient-signup">
        <img
          src="/playground_assets/rectangle151174-zk4g-1100h.png"
          alt="Rectangle151174"
          className="patient-signup-rectangle151"
        />
        <div className="patient-signup-frame125">
          <span className="patient-signup-text">
            <span>Sign Up</span>
          </span>
          <span className="patient-signup-text02">
            <span>Hello there, please fill your information below</span>
          </span>
        </div>
        <div className="patient-signup-group120">
          <span className="patient-signup-text04">
            <span>PHONE NO</span>
          </span>
          <img
            src="/playground_assets/line182183-7t9c.svg"
            alt="Line182183"
            className="patient-signup-line182"
          />
        </div>
        <div className="patient-signup-frame124">
          <div className="patient-signup-group115">
            <span className="patient-signup-text06">
              <span>FULL NAME</span>
            </span>
            <img
              src="/playground_assets/line180181-raa6.svg"
              alt="Line180181"
              className="patient-signup-line180"
            />
            
            <input className="patient-signup-text08" placeholder='your full name' onChange={e => setFullname(e.target.value)}/>
            
          </div>
          <div className="patient-signup-group116">
            <span className="patient-signup-text10">
              <span>EMAIL ID</span>
            </span>
            <img
              src="/playground_assets/line181182-tl.svg"
              alt="Line181182"
              className="patient-signup-line181"
            />
            
            <input className="patient-signup-text12" placeholder='your email id' onChange={e => setEmail(e.target.value)}/>
            <div style={{color: 'red', marginLeft: 220, marginTop: 40}}>
              {error}
            </div>
          </div>
        </div>
       
        <input className="patient-signup-text14" placeholder='your phone number' onChange={e => setPhone(e.target.value)}/>
        
        <div className="patient-signup-group118">
          <span className="patient-signup-text16">
            <span>PASSWORD</span>
          </span>
          <img
            src="/playground_assets/line183184-jde2.svg"
            alt="Line183184"
            className="patient-signup-line183"
          />
          
          <input className="patient-signup-text18" placeholder='create a password' type="password"  onChange={e => setPassword(e.target.value)}/>
          
        </div>

        <div className="patient-signup-group118x">
          <span className="patient-signup-text16">
            <span>CONFIRM</span>
          </span>
          <img
            src="/playground_assets/line183184-jde2.svg"
            alt="Line183184"
            className="patient-signup-line183"
          />
          
          <input className="patient-signup-text18" placeholder='re enter password' type="password"  onChange={e => setPassword2(e.target.value)}/>
          
        </div>
        <div className="patient-signup-frame123"  onClick={handleSubmit}>
          <div className="patient-signup-frame122">
           
            <span className="patient-signup-text20">
              <span>Signup</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientSignup
