import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
const Articles = () => <h2>Articles</h2>
const Login = () => <h2>Login</h2>
const Home = () => <h2>Home</h2>

class App extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/surveys" component={Articles} />
                        <Route path="/surveys/new" component={Login} />

                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default App;