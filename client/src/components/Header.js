import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        मन्तव्य
                    </a>
                    <ul className="right">
                        <li>
                            <a>Sign Up</a>
                            <a>Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;

