import { useEffect, useState } from "react"
import { getUserData } from "../firebase";

const Profile = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const email = localStorage.getItem("email");
        getUserData(email).then(dat => setData(dat));
    }, [])


    if (!data)
        return null;

    return (
        <div style={{background: 'white', height: '100vh', paddingTop: '40px'}}>   
            <h2 style={{textAlign: 'center', color: 'black'}}>{data.fullname}</h2>
            <h2 style={{textAlign: 'center', color: 'black'}}>{data.email}</h2>
            <h2 style={{textAlign: 'center', color: 'black'}}>{data.phone}</h2>
        </div>
    )
}

export default Profile;