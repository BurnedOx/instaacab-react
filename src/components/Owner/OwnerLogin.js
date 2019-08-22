import React from 'react'
import Login from "../Login";

const OwnerLogin = (props) => {
    const type = {
        name: 'Owner',
        regLink: 'owner-registration'
    };
    return (
        <Login type={type}/>
    );
};

export default OwnerLogin;