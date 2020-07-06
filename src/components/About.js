import React, { Component } from 'react';
import Nav from './Nav'

class About extends Component {
    render(){
        return (
            <body>
            <Nav/>
            <section className="aboutSection">
                <div className="contentContainer bleed">
                    <div className="imageContainer">
                        <img src={require("../media/about/005035280005.jpg")} alt=""/>
                    </div>
                    <div className="textContainer">
                        <h1>Tiger Saysavanh</h1>
                        <p>Tiger Saysavanh is a Toronto based photographer shooting both digital and analogue. He specializes in music, editorial, and creative photography as well as video editing.</p>
                        <a href="mailto:tigersaysavanh@gmail.com">email: tigersaysavanh@gmail.com</a>
                        <a href="https://www.instagram.com/tigersaysavanh/">ig: @tigersaysavanh</a>
                    </div>
                </div>
            </section>
            </body>
        );
    }
}

export default About;
