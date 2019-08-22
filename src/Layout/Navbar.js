import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import logo from '../assets/images/logo.png';

class Navbar extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt={'logo'} style={{width: '40px'}}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent" style={{marginLeft: 'auto'}}>

                        {this.props.authenticated ?
                            <Link to="/logout">
                                <button className="btn btn-outline-danger mr-sm-2 my-sm-0" type="submit">Logout</button>
                            </Link> :
                            <div>
                                <Link to="/rider-login">
                                    <button className="btn btn-outline-success mr-sm-2 my-sm-0" type="submit">Login as Rider</button>
                                </Link>

                                <Link to="/driver-login">
                                    <button className="btn btn-outline-success mr-sm-2 my-sm-0" type="submit">Login as Driver</button>
                                </Link>

                                <Link to="/owner-login">
                                    <button className="btn btn-outline-success mr-sm-2 my-sm-0" type="submit">Login as Owner</button>
                                </Link>
                            </div>
                        }

                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    authenticated: state.auth.token !== null
});

export default connect(mapStateToProps)(Navbar);