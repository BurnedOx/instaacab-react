import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <main style={{minHeight: '55vh'}}>{this.props.children}</main>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Layout;