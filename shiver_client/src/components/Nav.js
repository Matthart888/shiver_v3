import React, { Component } from 'react';
import '../App.css';
// import { Header, Navigation} from 'react-mdl';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {

        const submitSearch = (e) => {
            e.preventDefault();
            alert('Searched');
        }

        return(
            <div>
                <h1>Shiver</h1>
                <ul>
                    <div className="searchBar">
                        {/* <form onSubmit={submitSearch()}>
                            <input type="text" className="searchInput" placeholder="Search" />
                        </form> */}
                        <i className="fa fa-search" aria-hidden="true" />
                    </div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/tips&tricks">Tips & Tricks</Link></li>
                    <li><Link to="/guides">Guides</Link></li>
                    <li><Link to="/gamerthoughts">Gamer Thoughts</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                </ul>
            </div>
            // <Header title={<span><Link className="title" to="/"><strong>Shiver</strong></Link></span>}>
            //     <Navigation>
            //         <div className="searchBar">
            //             <input type="text" className="searchInput" placeholder="Search" />
            //             <i className="fa fa-search" aria-hidden="true" />
            //         </div>
            //         <Link to="/">Home</Link>
            //         <Link to="/news">News</Link>
            //         <Link to="/tips&tricks">Tips & Tricks</Link>
            //         <Link to="/guides">Guides</Link>
            //         <Link to="/gamerthoughts">Gamer Thoughts</Link>
            //         <Link to="/login">Log In</Link>
            //     </Navigation>
            // </Header>
        )
    }
}

export default Nav