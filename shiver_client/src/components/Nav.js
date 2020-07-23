import React, { Component } from 'react';
import '../App.css';
import { Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <Header title={<span><span style={{ color: 'white' }}><strong>Shiver</strong></span></span>}>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/news">News</Link>
                    <Link to="/tips&tricks">Tips & Tricks</Link>
                    <Link to="/guides">Guides</Link>
                    <Link to="/gamerthoughts">Gamer Thoughts</Link>
                    <Link to="/login">Log In</Link>
                </Navigation>
            </Header>
        )
    }
}

export default Nav