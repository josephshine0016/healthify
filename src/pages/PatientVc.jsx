import React, { useState } from 'react'

import { Helmet } from 'react-helmet'
import DailyIframe from '@daily-co/daily-js';


import './patient-vc.css'
import { useNavigate } from 'react-router-dom';

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

const PatientVC = (props) => {
  const navigate = useNavigate();
  const [join, setJoin] = useState(false);
  return (
    <div className="patient-vc-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="patient-vc-patient-vc">
        <div className="patient-vc-frame150">
          <div className="patient-vc-frame147">
            <span className="patient-vc-text">
              <span>Dr. Sunny Joseph</span>
            </span>
          </div>

          <iframe style={{ width: 600, height: 400, marginTop: 50 }} id="video-chat" allow="camera; microphone" />
        </div>

      </div>


      <div style={{width: 'max-content', margin: 'auto'}} >
          {join ? (
            <button onClick={() => {
              callFrame.destroy().finally(() => navigate("/patient-dashboard"))
              
            } }> BACK</button>
          ) : (
            <button onClick={() => {
              createFrameAndJoinRoom();
              setJoin(true);
            }}>JOIN</button>
          )}

        </div>
    </div>

  )
}

export default PatientVC
