import React, { Component } from 'react';
import '../App.css';
import { Header, Navigation, Textfield } from 'react-mdl';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <Header title={<span><Link className="title" to="/"><strong>Shiver</strong></Link></span>}>
                <Navigation>
                    <Textfield 
                        className="searchBar"
                        value="Search"
                        onChange={() => {}}
                        label="Search2"
                    />
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