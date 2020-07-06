import React, { Component } from 'react';
import mediaLibrary from '../mediaLibrary'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Nav from "../Nav"

class ArchiveType extends Component {
    render(){
        console.log(this.props.location.pathname);

        return (
                <div className="bleed">
                    <Nav/>
                    <div className="archiveContainer">
                        <h2 className="archiveType">{this.props.match.params.type}</h2>
                        <div className="shootContainer">
                            <div className="shootList">
                                {Object.keys(mediaLibrary[this.props.match.params.type]).map((shoot,index)=>{
                                    return(
                                        <Link className="link" activeclassname="currentPage" to={"/archives/"+this.props.match.params.type+"/"+shoot.toLowerCase()} key={shoot+"_"+index+"_link"}>{mediaLibrary[this.props.match.params.type][shoot]['name']}</Link>
                                    )
                                })}
                            </div>
                            {Object.keys(mediaLibrary[this.props.match.params.type]).map((shoot,index)=>{
                                return(
                                    <div className="shoot" key={shoot+"_banner_link"}>
                                        <Link className="link shootLink" activeclassname="currentPage"  to={"/archives/"+this.props.match.params.type+"/"+shoot.toLowerCase()} >
                                            <div className="imageContainer">
                                                <img src={mediaLibrary[this.props.match.params.type][shoot]['displayImage']} alt={shoot+" cover photo"} />
                                            </div>
                                            <div className="textContainer">
                                                <h3 className="shootName">{mediaLibrary[this.props.match.params.type][shoot]['name']}</h3>
                                                {/* <p className="shootDescription">{mediaLibrary.editorial[shoot]['description']}</p> */}
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
        );
    }
}

export default ArchiveType;
