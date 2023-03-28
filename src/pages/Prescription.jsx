import React, { useState, useEffect } from 'react'
import { setPresData } from '../firebase';

const Prescription = ({readonly = false, preData}) => {
    const [name, setname] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState(0);
    const [date, setDate] = useState("");
    const [data, setData] = useState("");

    useEffect(() => {
        if (!readonly) {
            setPresData({name, sex,age,date,data});
        }

    }, [name, sex, age, date, data])

    useEffect(() => {
      if (preData) {
        setname(preData.name);
        setSex(preData.sex)
        setAge(preData.age)
        setDate(preData.date)
        setData(preData.data);
      }
    }, [preData])

    return (
        <div style={{width: 600, margin: 'auto' }}
        >
          <img src='./HealthifyPres.png' style={{ width: 600 }} />
          <input readOnly={readonly} type="text" style={{ zIndex: 100, marginLeft: 170, top: -570, position: "relative", backgroundColor: 'transparent', color: 'black' }} 
            onChange={e => setname(e.target.value)}
            value={name}
          />
          <input readOnly={readonly} type="text" 
            onChange={e => setSex(e.target.value)}
            value={sex}
            style={{ zIndex: 100, left: -247, top: -539, position: "relative", width: 50, backgroundColor: 'transparent', color: 'black' }} />
          <input readOnly={readonly} type="number" 
            onChange={e => setAge(e.target.valueAsNumber)}
            value={age}
            style={{ zIndex: 100, left: -182, top: -539, position: "relative", width: 50, backgroundColor: 'transparent', color: 'black' }} />
          <input readOnly={readonly} type="text"
            onChange={e => setDate(e.target.value)}
            value={date}
            style={{ zIndex: 100, left: -110, top: -539, position: "relative", width: 100, backgroundColor: 'transparent', color: 'black' }} />
  
          <textarea readOnly={readonly} 
            onChange={e => setData(e.target.value)}
            value={data}
            style={{ zIndex: 100, left: 117, top: -402, position: "relative", width: 350, height: 200, backgroundColor: 'transparent', color: 'black' }} />
        </div>
    )
}

export default Prescription;