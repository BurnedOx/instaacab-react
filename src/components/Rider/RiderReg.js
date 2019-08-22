import React from 'react';
import Reg from "../Reg";

const RiderReg = (props) => {
    const type = {
        type: 'rider',
        name: 'Rider',
        loginLink: 'rider-login'
    };
    return (
        <Reg type={type}/>
    )
};

export default RiderReg;