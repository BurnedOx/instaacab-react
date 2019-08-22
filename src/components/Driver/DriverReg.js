import React from 'react';
import Reg from "../Reg";

const DriverReg = (props) => {
    const type = {
        type: 'driver',
        name: 'Driver',
        loginLink: 'driver-login'
    };
    return (
        <Reg type={type}/>
    )
};

export default DriverReg;