import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
const Articles = () => <h2>Articles</h2>
const Login = () => <h2>Login</h2>
const Home = () => <h2>गृहपृष्ठ</h2>

class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Navbar />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/surveys" component={Articles} />
                        <Route path="/surveys/new" component={Login} />
                        <button type="button" class="btn btn-primary">Primary</button>
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default App;