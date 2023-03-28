import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';
import { getRealtimeData } from '../firebase';

import './readings.css'

const Readings = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      getRealtimeData().then(d => d && setData(d));
      console.log(data);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="readings-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="readings-readings">
        <div className="readings-frame144"></div>
        <span className="readings-text">
          <span>Live Readings</span>
        </span>
        <div className="readings-frame145">
          <span className="readings-text02">
            <span>Temperature</span>
          </span>
          <div
            style={{
              background: 'lightblue',
              width:467,
              height:95,
              fontSize: 32,
              color: "black",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {data && Number(data.temperature).toFixed(2)}
            </div>
          <span className="readings-text04">
            <span>Heart Rate</span>
          </span>
          <div
            style={{
              background: 'lightblue',
              width:467,
              height:95,
              fontSize: 32,
              color: "black",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {data && Number(data.heartrate).toFixed(2)}
            </div>
          <span className="readings-text06">
            <span>SPO2</span>
          </span>
          <div
            style={{
              background: 'lightblue',
              width:467,
              height:95,
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
        <div className="readings-frame146">
          <div className="readings-frame125">
            <span className="readings-text08" onClick = {() => navigate("/patient-dashboard")}>
              <span>BACK</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Readings
