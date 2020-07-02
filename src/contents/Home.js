import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile.png';
import Social from '../components/Social';

class Home extends Component {
    render() {
        return (
            <div className="condiv-home" >
                <img src={profilepic} className="profilepic" width="300px" height="400px"></img><br/>
                <ReactTypingEffect className="typingeffect" text={['I am Yin Yuen Leng', 'I am a software developer']} speed={100} eraseDelay={700} />
                <Social />
            </div>
        )
    }
}
export default Home