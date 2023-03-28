import React from 'react'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';

import './landing-page.css'

const LandingPage = (props) => {
  const navigate = useNavigate();
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="landing-page-landing-page">
        <div className="landing-page-frame132">
          <img
            src="/playground_assets/image96031-z9a-1100h.png"
            alt="image96031"
            className="landing-page-image9"
          />
        </div>
        <div className="landing-page-frame143">
          <div className="landing-page-frame135">
            <div className="landing-page-frame134">
              <div className="landing-page-frame131">
                <span className="landing-page-text">
                  <span>Healthify</span>
                </span>
              </div>
            </div>
            <div className="landing-page-frame133">
              <div className="landing-page-group115">
                <span className="landing-page-text02" onClick={() => navigate("/signup-patient")}>
                  <span>Sign up</span>
                </span>
              </div>
              <div className="landing-page-group114">
                <span className="landing-page-text04" onClick={() => navigate("/login-patient")}>
                  <span>Login</span>
                </span>
              </div>
              <img
                src="/playground_assets/vector6035-k139.svg"
                alt="Vector6035"
                className="landing-page-vector"
              />
              <img
                src="/playground_assets/frame6036-idgx.svg"
                alt="Frame6036"
                className="landing-page-frame"
              />
              <img
                src="/playground_assets/frame6039-yvse.svg"
                alt="Frame6039"
                className="landing-page-frame1"
              />
            </div>
          </div>
          <div className="landing-page-frame129">
            <span className="landing-page-text06">
              <span>Get ready for a next level doctor consultation</span>
            </span>
          </div>
          <div className="landing-page-frame130">
            <span className="landing-page-text08">
              <span>
                <span>Help?</span>
                <br></br>
                <span>About Us</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
