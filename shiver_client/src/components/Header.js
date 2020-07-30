import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
    const[search, setSearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searched');
    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput'

    return(
        <header>
            <nav>
                <Link to="/" className="title">Shiver</Link>
                <div className="navbar">
                    <form className="searchBar" onSubmit={submitSearch}>
                        <input type="text" className={searchClass} placeholder="Search" />
                        <i onClick={openSearch} className="fa fa-search" aria-hidden="true" style={{margin: "5px" }}/>
                    </form>
                        
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

export default Header