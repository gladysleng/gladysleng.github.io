import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


class Education extends Component {
    render() {
        return (
            <div className="condiv education">
                <h1 className="subtopic">Education and Work Experience</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="January 2019 - August 2019"
                        contentStyle={{ backgroundColor:'#FEFEFD ', color: 'black ' }}
                        iconStyle={{ background: '#ffa500', color: '#fff' ,marginTop:'40px'}}
                        icon={<i class="fa fa-briefcase fa-2x Icon" />}
                    >
                        <h3 className="vertical-timeline-element-title">Java Software Developer Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">Kanata, Canada</h4>
                        <p className="about">
                            Intern at Trend Micro as a Java and React developer
                     </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May 2018 - December 2018"
                        contentStyle={{ backgroundColor:'#FEFEFD ', color: 'black ' }}
                        iconStyle={{ background: '#ffa500', color: '#fff' }}
                        icon={<i class="fa fa-briefcase fa-2x Icon"></i>}
                    >
                        <h3 className="vertical-timeline-element-title">Agile Software Developer Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">Ottawa, Canada</h4>
                        <p className="about"> 
                            Intern at Caseware Inc as a C++ software developer
                     </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="January 2017 - December 2018"
                        contentStyle={{ backgroundColor:'#FEFEFD ', color: 'black ' }}
                        iconStyle={{ background: '#ffa500', color: '#fff' }}
                        icon={<i class="fa fa-briefcase fa-2x Icon"></i>}
                    >
                        <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">Ottawa, Canada</h4>
                        <p className="about">
                           Tutor students in Discrete Math course at Carleton University 
                     </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="January 2015 - June 2020"
                        contentStyle={{ backgroundColor:'#FDFEFE ', color: 'black ' }}
                        iconStyle={{ background: '#73BFFC', color: '#fff' }}
                        icon={<i class="fa fa-university fa-2x Icon"></i>}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Computer Science with Business and Management</h3>
                        <h4 className="vertical-timeline-element-subtitle"> Bachelor degree </h4>
                        <p className="about">
                            Carleton University,Ottawa
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="July 2013 - September 2014"
                        contentStyle={{ backgroundColor:'#FDFEFE ', color: 'black ' }}
                        iconStyle={{ background: '#73BFFC', color: '#fff' }}
                        icon={<i class="fa fa-university fa-2x Icon"></i>}
                    >
                        <h3 className="vertical-timeline-element-title">International Exchange Student </h3>
                        <h4 className="vertical-timeline-element-subtitle"> Grade 12 diploma </h4>
                        <p className="about">
                            Participated in an student exchange program from Malaysia to Yellowknife,Canada
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="January 2008 - December 2012"
                        contentStyle={{ backgroundColor:'#FDFEFE ', color: 'black ' }}
                        iconStyle={{ background: '#73BFFC', color: '#fff' }}
                        icon={<i class="fa fa-university fa-2x Icon"></i>}
                    >
                        <h3 className="vertical-timeline-element-title">Seksyen 4 High School </h3>
                        <h4 className="vertical-timeline-element-subtitle"> SPM certificate </h4>
                        <p className="about">
                            High school in Malaysia
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}
export default Education