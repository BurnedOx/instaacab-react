import React from 'react';
import Reg from "../Reg";

const OwnerReg = (props) => {
    const type = {
        type: 'owner',
        name: 'Owner',
        loginLink: 'owner-login'
    };
    return (
        <Reg type={type}/>
    )
};

export default OwnerReg;