import React from 'react'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';

import './patient-dashboard.css'

const PatientDashboard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="patient-dashboard-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="patient-dashboard-patient-dashboard">
        <img
          src="/playground_assets/rectangle1589175-a53e-1100h.png"
          alt="Rectangle1589175"
          className="patient-dashboard-rectangle158"
        />
        <div className="patient-dashboard-frame141"></div>
        <div className="patient-dashboard-frame189"></div>
        <div className="patient-dashboard-frame112">
          <span className="patient-dashboard-text">
            <span>Healthify</span>
          </span>
        </div>
        <div className="patient-dashboard-frame140">
          <div className="patient-dashboard-frame30">
            <div className="patient-dashboard-frame29">
              <div className="patient-dashboard-ggprofile">
                <div className="patient-dashboard-group">
                  <img
                    src="/playground_assets/vector6531-tp3h.svg"
                    alt="Vector6531"
                    className="patient-dashboard-vector"
                  />
                  <img
                    src="/playground_assets/vector6531-0z.svg"
                    alt="Vector6531"
                    className="patient-dashboard-vector1"
                  />
                </div>
              </div>
              <span className="patient-dashboard-text02" onClick = {() => navigate("/profile")}>
                <span>Your Profile</span>
              </span>
            </div>
          </div>
          <div className="patient-dashboard-frame31">
            <img
              src="/playground_assets/carbontemperaturefahrenheit6531-szm.svg"
              alt="carbontemperaturefahrenheit6531"
              className="patient-dashboard-carbontemperaturefahrenheit"
            />
            <span className="patient-dashboard-text04" onClick = {() => navigate("/patient-readings")} >
              <span>Live Readings</span>
            </span>
          </div>
          <div className="patient-dashboard-frame32">
            <img
              src="/playground_assets/carbonreport6532-0qfs.svg"
              alt="carbonreport6532"
              className="patient-dashboard-carbonreport"
            />
            <span className="patient-dashboard-text06" onClick={() => navigate("/pres-preview")}>
              <span>Download Prescription</span>
            </span>
          </div>
          <div className="patient-dashboard-frame33">
            <img
              src="/playground_assets/materialsymbolshistory6532-711f.svg"
              alt="materialsymbolshistory6532"
              className="patient-dashboard-materialsymbolshistory"
            />
            <span className="patient-dashboard-text08">
              <span>History</span>
            </span>
          </div>
          <div className="patient-dashboard-frame34">
            <img
              src="/playground_assets/icbaselinelogout6532-lypn.svg"
              alt="icbaselinelogout6532"
              className="patient-dashboard-icbaselinelogout"
            />
            <span className="patient-dashboard-text10" onClick = {() => navigate("/login-patient")}>
              <span>Sign Out</span>
            </span>
          </div>
        </div>
        <div className="patient-dashboard-frame139">
          <div className="patient-dashboard-frame121">
            <span className="patient-dashboard-text12" onClick = {() => navigate("/patient-vc")}>
              <span>Connect with a doctor</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard
