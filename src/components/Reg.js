import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import background from "./bg-01.jpg";
import Axios from "../Axios";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actions from '../store/actions/index';
import withErrorHandler from "../HOC/withErrorHandler";

class Reg extends Component {
    state = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirm: "",
        mobile: ""
    };

    componentWillMount() {
        this.props.regInit();
    }

    onChangeHandler = (event) => this.setState({[event.target.name]: event.target.value});

    onSubmitHandler = (event) => {
        event.preventDefault();
        const data = {
            username: this.state.username,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        };
        this.props.register(data, this.props.type.type)
    };

    render() {
        let component = <Redirect to={`/${this.props.userType}-dashboard`}/>;

        if (!this.props.authenticated) {
            component = (
                <div style={{
                    backgroundImage: "url(" + background + ")",
                    padding: '10% 0',
                }}>
                    <div className="container register">
                        <div className="row">
                            <div className="col-md-3 register-left">
                                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                                <h3>Welcome</h3>
                                <Link to={this.props.type.loginLink}><input type="submit" name="" value="Login"/><br/></Link>
                                <p>{this.props.message}</p>
                            </div>
                            <div className="col-md-9 register-right">

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <h3 className="register-heading">{this.props.type.name} Registrasion</h3>
                                        <div className="row register-form">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name={'username'}
                                                        placeholder="Username *"
                                                        value={this.state.username}
                                                        onChange={this.onChangeHandler}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name={'first_name'}
                                                        placeholder="First Name *"
                                                        value={this.state.first_name}
                                                        onChange={this.onChangeHandler}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name={'last_name'}
                                                        placeholder="Last Name"
                                                        value={this.state.last_name}
                                                        onChange={this.onChangeHandler}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name={'password'}
                                                        placeholder="Password *"
                                                        value={this.state.password}
                                                        onChange={this.onChangeHandler}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name={'password_confirm'}
                                                        placeholder="Confirm Password *"
                                                        value={this.state.password_confirm}
                                                        onChange={this.onChangeHandler}
                                                    />
                                                </div>

                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name={'email'}
                                                        placeholder="Your Email"
                                                        value={this.state.email}
                                                        onChange={this.onChangeHandler}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text"
                                                           minLength="10"
                                                           maxLength="10"
                                                           name="mobile"
                                                           className="form-control"
                                                           placeholder="Your Mobile *"
                                                           value={this.state.mobile}
                                                           onChange={this.onChangeHandler}
                                                    />
                                                </div>
                                                {/*<div className="form-group">*/}
                                                {/*    <div className="maxl">*/}
                                                {/*        <label className="radio inline">*/}
                                                {/*            <input type="radio" name="gender" value="male" checked />*/}
                                                {/*            <span> Male </span>*/}
                                                {/*        </label>*/}
                                                {/*        <label className="radio inline">*/}
                                                {/*            <input type="radio" name="gender" value="female" />*/}
                                                {/*            <span>Female </span>*/}
                                                {/*        </label>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                                <button type="submit" className="btnRegister" onClick={this.onSubmitHandler}>
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return component;
    }
}

const mapStateToProps = (state) => ({
    message: state.auth.message,
    loading: state.auth.loading,
    authenticated: state.auth.token !== null,
    userType: state.auth.userType
});

const mapDispatchToProps = (dispatch) => ({
    regInit: () => dispatch(actions.regInit()),
    register: (data, userType) => dispatch(actions.register(data, userType))
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Reg, Axios));