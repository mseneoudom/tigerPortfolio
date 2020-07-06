import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';




class Nav extends Component {
    render(){
        return (
            <>
            <nav className="topNav">
                    <ul>
                        <li>
                        <NavLink className="link" activeclassname="currentPage" to="/about">About</NavLink>
                        </li>
                        <li>
                            <Link className="link" activeclassname="currentPage" to="/archives/editorial">editorial</Link>
                        </li>
                        <li>
                            <Link className="link" activeclassname="currentPage" to="/archives/creative">creative</Link>
                        </li>
                        <li>
                            <Link className="link" activeclassname="currentPage" to="/archives/music">music</Link>
                        </li>
                        <li>
                            <Link className="link" activeclassname="currentPage" to="/archives/videos">videos</Link>
                        </li>
                        <li><a href="https://www.instagram.com/tigersaysavanh/"><i className="fab fa-instagram"></i></a></li>
                    </ul>
            </nav>
            </>
        );
    }
}

export default Nav;
