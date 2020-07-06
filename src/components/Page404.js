import React, { Component } from 'react';
import Nav from './Nav';

class Page404 extends Component {
    render(){
        return (
            <>
            <Nav/>
            <p>
                This shoot does not exist!
            </p>
            </>
        );
    }
}

export default Page404;
