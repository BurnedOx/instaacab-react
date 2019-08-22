import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
import RiderLogin from './components/Rider/RiderLogin';
import RiderReg from './components/Rider/RiderReg';
import OwnerLogin from './components/Owner/OwnerLogin';
import DriverLogin from './components/Driver/DriverLogin';
import DriverReg from './components/Driver/DriverReg'
import OwnerReg from './components/Owner/OwnerReg';
import Layout from "./Layout/Layout";
import DriverDashboard from "./components/Driver/DriverDashboard";
import OwnerDashboard from "./components/Owner/OwnerDashboard";
import RiderDashboard from "./components/Rider/RiderDashboard";
import Logout from "./components/Logout";

class App extends React.Component {
    componentWillMount() {
        this.props.initAuth();
    }

    render() {
        return (
            <Layout>
                <Route exact path={'/'} component={() => {
                    window.location.href = 'http://instaacab.com/';
                    return null;
                }}/>
                <Route path="/rider-login" component={RiderLogin}/>
                <Route path="/rider-registration" component={RiderReg}/>
                <Route path="/owner-login" component={OwnerLogin}/>
                <Route path="/owner-registration" component={OwnerReg}/>
                <Route path="/driver-login" component={DriverLogin}/>
                <Route path="/driver-registration" component={DriverReg}/>
                <Route path={'/driver-dashboard'} component={DriverDashboard}/>
                <Route path={'/owner-dashboard'} component={OwnerDashboard}/>
                <Route path={'/rider-dashboard'} component={RiderDashboard}/>
                <Route path={'/logout'} component={Logout}/>
            </Layout>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    initAuth: () => dispatch(actions.initAuth())
});

export default withRouter(connect(null, mapDispatchToProps)(App));
