import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => (
    <React.Fragment>
        <div className={'Modal'}
             style={{
                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0'
             }}
        >{props.children}</div>
        <Backdrop show={props.show} click={props.clickBackdrop}/>
    </React.Fragment>
);

export default React.memo(Modal);