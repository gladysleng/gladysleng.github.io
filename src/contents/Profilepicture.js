import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile.png';
import Social from '../components/Social';


class Profilepicture extends Component {
    render() {
        return (
            <div >
                <img src={profilepic} className="profilepic"></img>
                <p>Software developer</p>
                <Social/>
            </div>
        )
    }
}
export default Profilepicture