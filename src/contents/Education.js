import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
    render() {
        return (
            <div className="condiv education">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Bachelor of Computer Science With Business and Mangement stream" where="Carleton University" from="January 2015" to="June 2020" />
                <Widecard title="Grade 12 Diploma" where="Sir John Franklin High School" from="2013" to="2014" />
                <Widecard title="SPM" where="Seksyen 4 Bandar Kinrara Secondary School" from="2012" to="2008" />
            </div>
        )
    }
}
export default Education