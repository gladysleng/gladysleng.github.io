import React, { Component } from 'react';
import Typical from 'react-typical';
import YinLengResume from '../YinLengResume.pdf';
import styled from "styled-components";

class Home extends Component {
    render() {
        const Button = styled.button`
        background-color: black;
        color: white;
        font-size: 15px;
        padding: 5px 10px;
        border-radius: 30px;
        margin: 70px 0px;
        cursor: pointer;
      `;
        return (
            <div className="condiv-home" >
                <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '60px',marginTop:'-10px' }}>Hi!<br /> I'm Yin Yuen</h1>
                <span className="home-introduction"> I'm {' '}
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Computer Science graduate 🎓   from Carleton University ',
                            700,
                            'a software developer 👩‍💻 ',
                            700,
                            'open to all opportunities 🚪',
                            700,
                        ]}
                    />
                </span>
                    <a href={YinLengResume} target="_blank" rel="noopener noreferrer" download>  
                        <Button>
                            Download CV{' '}
                            <i className="fa fa-download" />
                        </Button>
                    </a>
            </div>
        )
    }
}
export default Home