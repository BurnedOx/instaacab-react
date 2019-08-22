import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';

class Logout extends React.Component {
    componentWillMount() {
        this.props.logout();
    }

    render() {
        window.location.href = 'http://instaacab.com/';
        return null;
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(actions.logout())
});

export default connect(null, mapDispatchToProps)(Logout);