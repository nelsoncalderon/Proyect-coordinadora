import React, { Component } from 'react';
import logo from '../Assets/img/logo.svg';


class NavbarL extends Component {
    render() {

        return (
            <header>
                <div className="content-logo" >
                    <img src={logo} alt="logo" />
                </div>

                <div className="content-text">
                <p className="text-title"> <span className="dot"></span>All systems operational&nbsp;</p><span className="separador">''</span>
                    <p className="text-title">&nbsp;Refreshed 12:11:00 UTC-0400</p>
                </div>
            </header>
        );
    }
}

export default NavbarL;