import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile.png';
import Social from '../components/Social';


class Profilepicture extends Component {
    render() {
        return (
            <div className="condiv-profile">
                <img src={profilepic} className="profilepic"></img>
                <span className="navName">Yin Yuen Leng</span>
                <span style={{fontSize:"15px", margin:"0px 10px 15px 10px",textAlign:"center"}}>Software developer</span>
                <hr/>
            </div>
        )
    }
}
export default Profilepicture