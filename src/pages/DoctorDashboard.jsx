import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';
import { getOnlinePatients, pingToServer } from '../firebase';

import './doctor-dashboard.css'

const DoctorDashboard = (props) => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([])

  useEffect(() => {
    const intervalId = setInterval(() => {
      pingToServer(localStorage.getItem("email"));
      getOnlinePatients().then(items => setPatients(items));
    }, 3000);

    // Return a cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="doctor-dashboard-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="doctor-dashboard-doctor-dashboard">
        <img
          src="/playground_assets/rectangle1589184-evk-1100h.png"
          alt="Rectangle1589184"
          className="doctor-dashboard-rectangle158"
        />
        <div className="doctor-dashboard-frame166">
          <div className="doctor-dashboard-frame156">
            <div className="doctor-dashboard-frame113">
              <span className="doctor-dashboard-text">
                <span>Healthify</span>
              </span>
            </div>
            <div className="doctor-dashboard-frame155">
              <div className="doctor-dashboard-frame151">
                <div className="doctor-dashboard-ggprofile">
                  <div className="doctor-dashboard-group">
                    <img
                      src="/playground_assets/vector4122-9myt.svg"
                      alt="Vector4122"
                      className="doctor-dashboard-vector"
                    />
                    <img
                      src="/playground_assets/vector4123-kg8d.svg"
                      alt="Vector4123"
                      className="doctor-dashboard-vector1"
                    />
                  </div>
                </div>
                <span className="doctor-dashboard-text02" onClick={() => navigate("/profile")}>
                  <span>Your Profile</span>
                </span>
              </div>
              <div className="doctor-dashboard-frame152">
                <img
                  src="/playground_assets/materialsymbolshistory4124-0ljs.svg"
                  alt="materialsymbolshistory4124"
                  className="doctor-dashboard-materialsymbolshistory"
                />
                <span className="doctor-dashboard-text04">
                  <span>History</span>
                </span>
              </div>
              <div className="doctor-dashboard-frame153">
                <img
                  src="/playground_assets/materialsymbolsprescriptionsoutline4129-o4to.svg"
                  alt="materialsymbolsprescriptionsoutline4129"
                  className="doctor-dashboard-materialsymbolsprescriptionsoutline"
                />
                <span className="doctor-dashboard-text06">
                  <span>Prescriptions</span>
                </span>
              </div>
              <div className="doctor-dashboard-frame154">
                <img
                  src="/playground_assets/icbaselinelogout415-an5v.svg"
                  alt="icbaselinelogout415"
                  className="doctor-dashboard-icbaselinelogout"
                />
                <span className="doctor-dashboard-text08" onClick={() => navigate("/login-doctor")}>
                  <span>Sign Out</span>
                </span>
              </div>
            </div>
          </div>
          <div className="doctor-dashboard-frame165">
            <div className="doctor-dashboard-frame157">
              <span className="doctor-dashboard-text10">
                <span>Patients in line</span>
              </span>
            </div>

            <div className="doctor-dashboard-frame164">
              {
                patients.length >= 1 && (
                  <div className="doctor-dashboard-frame161">
                    <div className="doctor-dashboard-frame158">
                      <span className="doctor-dashboard-text12">
                        <span>1. {patients[0].fullname}<span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                        </span>
                      </span>
                    </div>
                    <div className="doctor-dashboard-frame124">
                      <span className="doctor-dashboard-text14" onClick={() => {
                        localStorage.setItem("patientname", patients[0].fullname);
                        navigate("/doctor-vc")
                      }}>
                        <span>Accept</span>
                      </span>
                    </div>
                  </div>
                )
              }
              {
                patients.length >= 2 && (
                  <div className="doctor-dashboard-frame162">
                    <div className="doctor-dashboard-frame159">
                      <span className="doctor-dashboard-text16">
                        <span>2. {patients[1].fullname}</span>
                      </span>
                    </div>
                    <div className="doctor-dashboard-frame123">
                      <span className="doctor-dashboard-text18" onClick={() => {
                        localStorage.setItem("patientname", patients[1].fullname);
                        navigate("/doctor-vc")
                      }}>
                        <span>Accept</span>
                      </span>
                    </div>
                  </div>
                )
              }

              {
                patients.length >= 3 && (
                  <div className="doctor-dashboard-frame163">
                    <div className="doctor-dashboard-frame160">
                      <span className="doctor-dashboard-text20">
                        <span className="doctor-dashboard-text21">
                          3.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span>{patients[2].fullname}</span>
                      </span>
                    </div>
                    <div className="doctor-dashboard-frame122">
                      <span className="doctor-dashboard-text23" onClick={() => {
                        localStorage.setItem("patientname", patients[2].fullname);
                        navigate("/doctor-vc")
                      }}>
                        <span>Accept</span>
                      </span>
                    </div>
                  </div>
                )
              }


              {/*  */}

              {/*  */}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
