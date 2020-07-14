import React, { Component } from 'react'
import Widecard from '../components/Widecard';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'myskills': ['JAVA', 'REACT', 'SPLUNK', 'PL/SQL', 'OBJECT ORIENTED', 'INTEGRATION TESTING', 'MONGO DB','HTML','CSS','SPRING MVC']
        };
    }
    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '18px',paddingLeft:'15px' }}>
                    {this.state.myskills.map((value) => {
                        return <Widecard title={value}/>
                    })}
                </ul>
            </div>
        )
    }
}
export default Skills