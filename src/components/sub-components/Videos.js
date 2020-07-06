import React, { Component } from 'react';
import mediaLibrary from "../mediaLibrary"
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import ReactPlayer from 'react-player'
import Nav from '../Nav'

class Videos extends Component {
    constructor(){
        super();
        this.state = {
            videoRef : [
                {
                    name:'',
                    url:'',
                    thumbnail:'',
                    description:'',
                },
                {
                    name:'',
                    url:'',
                    thumbnail:'',
                    description:'',
                }
            ]
        }
    }

    componentDidMount(){
        this.setState({
            videoRef : [...mediaLibrary.videos]
        });
    }

    render(){
        return (
            <div className="bleed">
                <Nav/>
                <div className="archiveContainer">
                    <h2 className="archiveType">Videos</h2>
                    <div className="shootContainer">
                        <div className="shootList">
                            {Object.keys(this.state.videoRef).map((shoot,index)=>{
                                return(
                                    <div className="videoShoot" key={shoot+"_"+index+"_link"}>
                                        <h3>{this.state.videoRef[shoot]['name']}</h3>
                                        <ReactPlayer url={this.state.videoRef[shoot]['url']} controls light={this.state.videoRef[shoot]['thumbnail']}/>
                                    </div>
                                )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Videos;
