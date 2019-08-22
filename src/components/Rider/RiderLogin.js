import React from 'react'
import Login from "../Login";

const RiderLogin = (props) => {
    const type = {
        name: 'Rider',
        regLink: 'rider-registration'
    };
    return (
        <Login type={type}/>
    );
};

export default RiderLogin;