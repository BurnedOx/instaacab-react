import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer className="page-footer font-small">
            <div className="container-fluid text-center text-md-left"
                 style={{backgroundColor: "#78cf70", padding: '20px', color: 'white'}}>
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Instaacab</h5>
                        <p>We reach you in time, drop you in time</p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="col-md-4 mb-md-0 mb-3" style={{margin: '0 auto', width: '100px'}}>
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a>Link 1</a>
                                </li>
                                <li>
                                    <a>Link 2</a>
                                </li>
                                <li>
                                    <a>Link 3</a>
                                </li>
                                <li>
                                    <a>Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-3" style={{margin: '0 auto', width: '100px'}}>
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a>Link 1</a>
                                </li>
                                <li>
                                    <a>Link 2</a>
                                </li>
                                <li>
                                    <a>Link 3</a>
                                </li>
                                <li>
                                    <a>Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-3" style={{margin: '0 auto', width: '100px'}}>
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a>Link 1</a>
                                </li>
                                <li>
                                    <a>Link 2</a>
                                </li>
                                <li>
                                    <a>Link 3</a>
                                </li>
                                <li>
                                    <a>Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3"
                 style={{backgroundColor: '#252525', color: 'white'}}
            >© 2019 Copyright:
                <Link to={'/'}><a style={{color: 'white'}}> Instaacab.com</a></Link>
            </div>
        </footer>
    );
};

export default Footer;