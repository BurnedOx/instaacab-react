import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Modal from "../UI/Modal/Modal";

class RiderDashboard extends React.Component {
    state = {
        clicked: false
    };
    onClickHandler = () => this.setState({clicked: true});
    onConfirm = () => this.setState({clicked: false});

    render() {
        const type = 'rider';
        let component = <Redirect to={'/'}/>;

        if(this.props.authenticated && type !== this.props.userType) {
            component = <Redirect to={`/${this.props.userType}-dashboard`}/>
        }

        else if (this.props.authenticated && type === this.props.userType) {
            component = (
                <div className={'container'}>
                    <Modal show={this.state.clicked} clickBackdrop={this.onConfirm}>
                        <h5>Coming Soon....</h5>
                    </Modal>
                    <h1>Rider's Dashboard</h1>
                    <div>
                        <button onClick={this.onClickHandler}
                                className={'btn btn-outline-primary mr-sm-2 my-sm-0'}>My Profile</button>
                        <button onClick={this.onClickHandler}
                                className={'btn btn-outline-primary mr-sm-2 my-sm-0'}>Book Now</button>
                        <button onClick={this.onClickHandler}
                                className={'btn btn-outline-primary mr-sm-2 my-sm-0'}>Booking History</button>
                        <button onClick={this.onClickHandler}
                                className={'btn btn-outline-primary mr-sm-2 my-sm-0'}>Real-time Arrival Status</button>
                        <button onClick={this.onClickHandler}
                                className={'btn btn-outline-primary mr-sm-2 my-sm-0'}>Location Cost Estimation</button>
                        <button onClick={this.onClickHandler}
                                className={'btn btn-outline-primary mr-sm-2 my-sm-0'}>Notification</button>
                        <button onClick={this.onClickHandler}
                                className={'btn btn-outline-primary mr-sm-2 my-sm-0'}>My Wallet</button>
                    </div>
                </div>
            );
        }

        return component;
    }
}

const mapStateToProps = (state) => ({
    authenticated: state.auth.token !== null,
    userType: state.auth.userType
});

export default connect(mapStateToProps)(RiderDashboard);