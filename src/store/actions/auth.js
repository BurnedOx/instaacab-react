import * as actionTypes from './actionTypes';
import Axios from "../../Axios";

export const reqStart = () => {
    return {
        type: actionTypes.REQ_START
    }
};

export const reqFail = () => {
    return {
        type: actionTypes.REQ_FAIL
    }
};

export const regInit = () => {
    return {
        type: actionTypes.REG_INIT
    }
};

export const regSuccess = (message) => {
    return {
        type: actionTypes.REG_SUCCESS,
        message: message
    }
};

export const loginSuccess = (token) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.LOGOUT
    };
};

export const checkTimeOut = (expirationTime) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime)
    }
};

export const register = (data, userType) => {
    return dispatch => {
        dispatch(reqStart());
        Axios.post('/accounts/register/', data).then(
            res => {
                Axios.post(`/${userType}/add-group/`, {username: res.data.username}).then(
                    res => {
                        if (res.data) {
                            dispatch(regSuccess(`Registered as ${userType}`));
                        }
                    }
                ).catch(err => dispatch(reqFail()));
            }
        ).catch(err => dispatch(reqFail()))
    };
};

export const login = (data) => {
    return dispatch => {
        reqStart();
        Axios.post('/token/', data).then(
            res => {
                localStorage.setItem('token', res.data.access);
                dispatch(loginSuccess(res.data.access));
                const expDate = new Date(parseInt(JSON.parse(atob(res.data.access.split(".")[1])).exp) * 1000);
                dispatch(checkTimeOut(expDate - new Date()));
            }
        ).catch(err => reqFail());
    }
};

export const initAuth = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout())
        } else {
            const expDate = new Date(parseInt(JSON.parse(atob(token.split(".")[1])).exp) * 1000);
            if (expDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(loginSuccess(token));
                dispatch(checkTimeOut(expDate - new Date()));
            }
        }
    }
};