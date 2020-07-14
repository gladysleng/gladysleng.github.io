import React, { Component } from 'react';
import Social from '../components/Social';

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
                <h1 className="subtopic">Let's Connect!</h1>
                <p className="about">
                    Don't be a stranger, just say Hello! Feel free to get in touch with me. 
                    I'm always open to discussing new projects,
                     creative ideas or opportunities to be part of your visions.
                </p>
                <Social/>
            </div>
        )
    }
}
export default Contact