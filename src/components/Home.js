import React, { Component } from 'react';
import mediaLibrary from './mediaLibrary';
import HeaderNav from './HeaderNav'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Slider from 'react-slick'
import ReactDOM from 'react-dom'


class Home extends Component {
    constructor(){
        super();
        this.state={
            mediaLibrary,
            focusPic:{
                url:'',
                description:'',
            },
            photoLibrary:{},
        }
        // this.myRefs = [];
    }

    componentDidMount(){
        // var element = ReactDOM.findDOMNode(this);
        // console.log(element);
        // this.refs.slideRef.style.display="flex";
        
        //modifying styles
        // element.style.display = "flex";
    }
    render(){
        const settings = {
            // adaptiveHeight:true,
            className:"sliderContainer",
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:7500,
            pauseOnHover:false,
            pauseOnFocus:false,
            pauseOnDotsHover:false,
        }
        return (
            <>
            <header>
                <div className="headerLeftContainer">
                    <div className="imageContainer logo">
                        <img src={mediaLibrary.logo[0]} alt="tiger's logo"/>
                    </div>
                    <div className="textContainer">
                        <p className="opener">Tiger Saysavanh</p>
                        <h1>The world through <br/>a lens</h1>
                        <p className="hook">The world, my journey, in the midst of chaos, through my eyes only. The life of a Toronto based photographer, creative influencer, student of art.</p>
                    </div>
                    <NavLink className="buttonStyle" to="/archives/editorial">
                        <p>
                            Explore
                        </p>
                    </NavLink>
                        {/* <p className="buttonStyle">Explore</p> */}
                </div>

                <Slider {...settings}>
                    <div className="imageContainer">
                        <img src={mediaLibrary.editorial.fasinfrank.photos[2].url} />
                    </div>    
                    <div className="imageContainer">
                        <img src={mediaLibrary.editorial.fasinfrank.photos[16].url} />
                    </div>            
                    <div className="imageContainer">
                        <img src={mediaLibrary.editorial.fasinfrank.photos[20].url} />
                    </div>            
                    <div className="imageContainer">
                        <img src={mediaLibrary.editorial.layeredidentity.photos[4].url} />
                    </div>                          
                    <div className="imageContainer">
                        <img src={mediaLibrary.editorial.mindofagenius.photos[2].url} />
                    </div>    
                </Slider>
            </header>
            


            <footer>
                <p>Copyright Tiger Saysavanh &copy; All rights reserved.</p>
            </footer>
            </>
        );
    }
}

export default Home;