import React, { Component } from 'react';
import mediaLibrary from '../../mediaLibrary'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Nav from '../../Nav'

class ShootPage extends Component {
    constructor(){
        super();
        this.state = {
            photoRef : {
                name:'',
                photos:[
                    {
                        url:''
                    },
                ],
            },
            shoot:[]
        }
    }
    componentDidMount(){
        this.setState({
            photoRef : mediaLibrary[this.props.match.params.type][this.props.match.params.shoot],
            shoot : [...mediaLibrary[this.props.match.params.type][this.props.match.params.shoot]['photos']]
        })
    }
    render(){
        console.log(this.props.location.pathname);
        
        return (
            <div className="bleed">
                <Nav/>
                <h2 className="shootName">{this.state.photoRef['name']}</h2>
                <div className="shootContainer">
                    {/* {typeof mediaLibrary.editorial[this.props.match.params.shoot]['photos'] == object?mu:null} */}
                    {Object.keys(this.state.shoot).map((set,index)=>{
                    return(
                        <div className="shoot" key={index}>
                            <img src={this.state.shoot[set]['url']} alt=""/>
                        </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default ShootPage;
