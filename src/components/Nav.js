import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';




class Nav extends Component {
    render(){
        return (
            <>
            <nav className="topNav subNav">
                <div className="bleed">
                    <ul>
                        <li>
                        <NavLink className="link" to="/">
                            <div className="imageContainer logo">
                                <img src={require("../media/logo/TS_LOGO_FINAL_BV1.png")} alt="tiger's logo"/>
                            </div>
                        </NavLink>
                        </li>
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
                </div>
            </nav>
            </>
        );
    }
}

export default Nav;
