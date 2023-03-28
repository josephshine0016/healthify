import { useEffect, useRef, useState } from "react"
import { getPresData } from "../firebase"
import Prescription from "./Prescription"
import ReactToPdf from "react-to-pdf"

const Preview = () => {
    const [defData, setDefData] = useState(null)
    const ref = useRef();

    useEffect(() => {
        getPresData().then(data => setDefData(data))
    }, [])

    return (
        <div>
            <ReactToPdf targetRef={ref} filename="prescription.pdf">
                {({ toPdf }) => (
                    <button style={{ position: 'absolute', top: 10, left: 1100 }} onClick={toPdf}>Download</button>
                )}
            </ReactToPdf>

            <div ref={ref} style={{width: 'max-content', height: 'max-content', margin: 'auto'}}>
                <Prescription readonly preData={defData} ref={ref} />
            </div>
        </div>
    )
}

export default Preview;