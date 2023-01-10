import userContext from './UserContext.js'
import { useState } from 'react';

const UserState = (props) => {

    // progress number for the loading bar is here.
    const [progress, setprogress] = useState(30);

    const [Acuserinfo, setAcuserinfo] = useState({ name: "Sura Ravikumar", email: "ravikumarsura.career@gmail.com", mobile: "9703612345", adress: "srikakulam" });


    // this is to set all the orders ordered by the user
    const [userorders, setUserorders] = useState([]);


    const [newlist, setNewlist] = useState([]);




    return (
        <userContext.Provider value={{ progress, setprogress, Acuserinfo, setAcuserinfo, userorders, setUserorders, newlist, setNewlist }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;