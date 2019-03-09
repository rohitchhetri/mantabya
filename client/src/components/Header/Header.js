import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div class="container">
                    <h1><a class="logo" href="#">मन्तव्य</a></h1>
                    <nav class="signupnav">
                        <ul>
                            <li>
                                <form class="example" action="action_page.php">
                                    <input type="text" placeholder="Search.." name="search" />
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </li>
                            <li class="signin"><a href="#">Sign in</a></li>
                            <li class="signup"><a href="#">Get Started</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}


export default Header;

