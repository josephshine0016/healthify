import React, { useEffect, useRef, useState } from 'react'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';
import { getRealtimeData } from '../firebase';

import DailyIframe from '@daily-co/daily-js';


import './doctor-vc.css'
import Prescription from './Prescription';

let callFrame = null

async function createFrameAndJoinRoom() {
  try {
    const iframe = document.getElementById("video-chat");
    console.log("starting")


    // const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true, });
    callFrame = DailyIframe.wrap(iframe);
    // await callFrame.join({ url: "https://healthify-team.daily.co/hello-daily", videoSource: stream.getVideoTracks()[0], startVideoOff: true});

    await callFrame.join({ url: "https://healthify-team.daily.co/hello-daily" })
    /* use the stream */
  } catch (err) {
    /* handle the error */
    console.error(err);
  }

}

const DoctorVC = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [join, setJoin] = useState(false)
  const presRef = useRef();




  useEffect(() => {
    const timer = setInterval(() => {
      getRealtimeData().then(d => d && setData(d));
      console.log(data);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="doctor-vc-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="doctor-vc-doctor-vc">
        <div className="doctor-vc-frame175">
          <div className="doctor-vc-frame167">
            <span className="doctor-vc-text">
              <span>{localStorage.getItem("patientname")}</span>
            </span>
          </div>
          <div className="doctor-vc-frame168">
            <span className="doctor-vc-text02">
              <span>Live Readings</span>
            </span>
          </div>
        </div>

        <div className="doctor-vc-frame182">
          <iframe style={{ width: 600, height: 400 }} id="video-chat" allow="camera; microphone" />
        </div>
        <div className="doctor-vc-group121">
          <div className="doctor-vc-frame186"></div>
          <div className="doctor-vc-frame185">
            <div className="doctor-vc-frame178">
              <span className="doctor-vc-text04" onClick={() => presRef.current.scrollIntoView()}>
                <span>Prescribe</span>
              </span>
            </div>
          </div>
          <div className="doctor-vc-frame184">
            <div className="doctor-vc-frame183">
              {join ? (
                <span className="doctor-vc-text06" onClick={() => {
                  callFrame.destroy().finally(() => navigate("/doctor-dashboard"))
                }

                }>
                  <span>BACK</span>
                </span>
              ) : (
                <span className="doctor-vc-text06" onClick={() => {
                  createFrameAndJoinRoom();
                  setJoin(true);
                }}>
                  <span>JOIN</span>
                </span>
              )}

            </div>
          </div>
        </div>
        <div className="doctor-vc-frame170">
          <span className="doctor-vc-text08">
            <span>Temperature</span>
          </span>
          <div className="doctor-vc-frame169">
            <div
              style={{
                background: 'lightblue',
                width: 467,
                height: 95,
                fontSize: 32,
                color: "black",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {data && Number(data.temperature).toFixed(2)}
            </div>
          </div>
        </div>
        <div className="doctor-vc-frame172">
          <span className="doctor-vc-text10">
            <span>Heart Rate</span>
          </span>
          <div className="doctor-vc-frame171">
            <div
              style={{
                background: 'lightblue',
                width: 467,
                height: 95,
                fontSize: 32,
                color: "black",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {data && Number(data.heartrate).toFixed(2)}
            </div>
          </div>
        </div>
        <div className="doctor-vc-frame174">
          <span className="doctor-vc-text12">
            <span>SPO2</span>
          </span>
          <div className="doctor-vc-frame173">
            <div
              style={{
                background: 'lightblue',
                width: 467,
                height: 95,
                fontSize: 32,
                color: "black",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {data && Number(data.spo2).toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "10vh", width: 600, margin: 'auto' }} ref={presRef}
      >
        <Prescription />
      </div>

    </div>
  )
}

export default DoctorVC
