import React, { useState } from 'react'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';
import { createUser, setUserData } from '../firebase';

import './doctor-signup.css'

const DoctorSignup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
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
      user && await setUserData({email, fullname, phone, type: 'doctor'});
      user && navigate("/login-doctor");
    }

  }
  return (
    <div className="doctor-signup-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="doctor-signup-doctor-signup">
        <img
          src="/playground_assets/rectangle1517391-hwsp-1100h.png"
          alt="Rectangle1517391"
          className="doctor-signup-rectangle151"
        />
        <div className="doctor-signup-frame125">
          <span className="doctor-signup-text">
            <span>Sign Up</span>
          </span>
          <span className="doctor-signup-text02">
            <span>Hello doctor, please fill your information below</span>
          </span>
        </div>
        <div className="doctor-signup-group120">
          <span className="doctor-signup-text04">
            <span>PHONE NO</span>
          </span>
          <img
            src="/playground_assets/line1827391-yk6.svg"
            alt="Line1827391"
            className="doctor-signup-line182"
          />
        </div>
        <div className="doctor-signup-frame124">
          <div className="doctor-signup-group115">
            <span className="doctor-signup-text06">
              <span>FULL NAME</span>
            </span>
            <img
              src="/playground_assets/line1807392-pwyu.svg"
              alt="Line1807392"
              className="doctor-signup-line180"
            />
            
            <input className="doctor-signup-text08" placeholder='your full name' onChange={e => setFullname(e.target.value)}/>
            
          </div>
          <div className="doctor-signup-group116">
            <span className="doctor-signup-text10">
              <span>EMAIL ID</span>
            </span>
            <img
              src="/playground_assets/line1817392-y0i.svg"
              alt="Line1817392"
              className="doctor-signup-line181"
            />
            
            <input className="doctor-signup-text12" placeholder='your email id' onChange={e => setEmail(e.target.value)}/>
            <div style={{color: 'red', marginLeft: 220, marginTop: 40}}>
              {error}
            </div>
          </div>
        </div>
        
        <input className="doctor-signup-text14" placeholder='your phone number' onChange={e => setPhone(e.target.value)}/>
        
        <div className="doctor-signup-group118">
          <span className="doctor-signup-text16">
            <span>PASSWORD</span>
          </span>
          <img
            src="/playground_assets/line1837393-fz5d.svg"
            alt="Line1837393"
            className="doctor-signup-line183"
          />
          
          <input className="doctor-signup-text18" placeholder='create a password' type="password" onChange={e => setPassword(e.target.value)}/>
          
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
        <div className="patient-signup-frame123" onClick={handleSubmit}>
          <div className="doctor-signup-frame122">
           
            <span className="doctor-signup-text20">
              <span>Signup</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorSignup
