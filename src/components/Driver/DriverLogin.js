import React from 'react'
import Login from "../Login";

const DriverLogin = (props) => {
	const type = {
		name: 'Driver',
		regLink: 'driver-registration'
	};
	return (
		<Login type={type}/>
	);
};

export default DriverLogin;