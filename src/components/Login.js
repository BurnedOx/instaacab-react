import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import background from "./bg-01.jpg";
import Axios from "../Axios";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actions from '../store/actions/index';
import withErrorHandler from "../HOC/withErrorHandler";

class Login extends Component {
	state = {
		username: '',
		password: ''
	};

	onChangeHandler = (event) => this.setState({[event.target.name]: event.target.value});

	onSubmitHandler = (event) => {
		event.preventDefault();
		this.props.login(this.state);
	};

	render() {
		let component = <Redirect to={`/${this.props.userType}-dashboard`}/>;

		if (!this.props.authenticated) {
			component = (
				<div style={{
					backgroundImage: "url(" + background + ")",
					paddingBottom: '10%',
					height: '100vh'
				}}>
					<div className="container" >

						<div className="d-flex justify-content-center h-100">
							<div className="card">
								<div className="card-header">
									<h3>{this.props.type.name} Log In</h3>
									{/*<div className="d-flex justify-content-end social_icon">*/}
									{/*	<span><i className="fab fa-facebook-square"></i></span>*/}
									{/*	<span><i className="fab fa-google-plus-square"></i></span>*/}
									{/*	<span><i className="fab fa-twitter-square"></i></span>*/}
									{/*</div>*/}
								</div>
								<div className="card-body">
									<form>
										<div className="input-group form-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="fas fa-user"></i></span>
											</div>
											<input
												type="text"
												className="form-control"
												name={'username'}
												placeholder="username"
												value={this.state.username}
												onChange={this.onChangeHandler}
											/>
										</div>
										<div className="input-group form-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="fas fa-key"></i></span>
											</div>
											<input
												type="password"
												className="form-control"
												name={'password'}
												placeholder="password"
												value={this.state.password}
												onChange={this.onChangeHandler}
											/>
										</div>
										<div className="row align-items-center remember">
											<input type="checkbox" />Remember Me
										</div>
										<div className="form-group">
											<button
												type="submit"
												className="btn float-right login_btn"
												onClick={this.onSubmitHandler}
											>Login</button>
										</div>
									</form>
								</div>
								<div className="card-footer">
									<div className="d-flex justify-content-center links">
										Don't have an account?<Link to={this.props.type.regLink}>Sign Up</Link>
									</div>
									<div className="d-flex justify-content-center">
										{/*<a href={'#'}>Forgot your password?</a>*/}
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
	authenticated: state.auth.token !== null,
	userType: state.auth.userType
});

const mapDispatchToProps = (dispatch) => ({
	login: (data) => dispatch(actions.login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Login, Axios));