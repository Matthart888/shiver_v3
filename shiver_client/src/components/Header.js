import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

/**
 * @author
 * @function Header
 **/

class Header extends Component {
    render() {

        // const submitSearch = (e) => {
        //     e.preventDefault();
        //     alert('Searched');
        // }

        return(
            <header>
                <nav>
                    <Link to="/" className="title">Shiver</Link>
                    <div className="navbar">
                        <div className="searchBar">
                            {/* <form onSubmit={submitSearch()}>
                                <input type="text" className="searchInput" placeholder="Search" />
                            </form> */}
                            <input type="text" placeholder="Search" />
                            <i className="fa fa-search" aria-hidden="true" style={{margin: "5px" }}/>
                        </div>
                        <Link className="navLink" to="/">Home</Link>
                        <Link className="navLink" to="/news">News</Link>
                        <Link className="navLink" to="/tips&tricks">Tips & Tricks</Link>
                        <Link className="navLink" to="/guides">Guides</Link>
                        <Link className="navLink" to="/gamerthoughts">Gamer Thoughts</Link>
                        <Link className="logIn" to="/login">Log In</Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header