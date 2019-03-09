import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div class="container">
                <nav class="navbar">
                    <ul>
                        <li><a href="#">गृहपृष्ठ</a></li>
                        <li><a href="#">राजनीति</a></li>
                        <li><a href="#">विज्ञान</a></li>
                        <li><a href="#">अध्यात्म</a></li>
                        <li><a href="#">स्वास्थ्य</a></li>
                        <li><a href="#">प्रविधी</a></li>
                        <li><a href="#">संस्कृति</a></li>
                        <li><a href="#">कथा</a></li>
                        <li><a href="#">कविता</a></li>
                        <li><a href="#">साहित्य</a></li>
                        <li><a href="#">बीस बर्षपछी</a></li>
                        <li><a href="#">अन्य</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}


export default Navbar;