import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';



export default class Timeline extends Component {

    render() {
        return (
        <div id="career">
            <div className='section-headers'>
                -My Journey-
            </div>
            <div className="container" style={{backgroundColor:'grey',borderRadius:'10px'}}>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="July,2019 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<i className="fa fa-suitcase fa-2x icon-center" aria-hidden="true"></i>
                    }
                    >
                        <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Impact Analytics, Bengaluru</h4>
                        <p>
                            API development, Database Schema designing, UI development, Deployment and Scaling
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="August,2017 - October,2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<i className="fa fa-suitcase fa-2x icon-center" aria-hidden="true"></i>}
                    >
                        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Kisan Network, Gurugram</h4>
                        <p>
                            API development, UI development, Unit Testing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2013-2017"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<i className="fa fa-book fa-2x icon-center" aria-hidden="true"></i>}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Technology</h3>
                        <h4 className="vertical-timeline-element-subtitle">MCKV Institute of Engineering</h4>
                        <p>
                        Computer Science and Engineering
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="March 2013"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<i className="fa fa-book fa-2x icon-center" aria-hidden="true"></i>}
                    >
                        <h3 className="vertical-timeline-element-title">ISC (XI)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Dreamland School</h4>
                        <p>
                            PCM with Computer Science
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="March 2011"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<i className="fa fa-book fa-2x icon-center" aria-hidden="true"></i>}
                    >
                        <h3 className="vertical-timeline-element-title">ICSE (X)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Dreamland School</h4>
                        <p>
                            Science with Computer Programming
                        </p>
                    </VerticalTimelineElement>
                    </VerticalTimeline>      
            </div>
        </div>
        );
    }
}
