import React, { Component } from 'react';
import Nav from './Nav'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class Archive extends Component {
    render(){
        return (
            <>
                <Nav/>
                <section className="archivesSection bleed">
                    <ul className="buttonUL">
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
                    </ul>

                
                </section>
            </>
        );
    }
}

export default Archive;
