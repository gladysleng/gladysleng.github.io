import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';


class Home extends Component {
    render() {
        return (
            <div className="condiv-home" >
                <ReactTypingEffect className="typingeffect" text={['I am Yin Yuen Leng', 'I am a software developer']} speed={300} eraseDelay={100} />
            </div>
        )
    }
}
export default Home