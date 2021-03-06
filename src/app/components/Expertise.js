import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {Card,ProgressBar} from "react-bootstrap"

export default class Expertise extends Component {
  render() {
      
    return (
      <div id='expertise'> 
        <div className='section-headers'>
            -Expertise-
        </div>
    
        <div class="container">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Backend Technologies <i className="fa fa-chevron-circle-down right-arrow" aria-hidden="true"></i>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <div>
                <label className='expertise-tags'>Node JS</label>
                <ProgressBar label='80%' variant="success" now={80} />
                <br/>
                <label className='expertise-tags'>Python</label>
                <ProgressBar label='70%' variant="success" now={70} />
                <br/>
                <label className='expertise-tags'>Java</label>
                <ProgressBar label='50%'  variant="success" now={50} />
            </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Databases <i className="fa fa-chevron-circle-down right-arrow" aria-hidden="true"></i>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div>
                  <label className='expertise-tags'>RDBMS(MySQL/Postgres)</label>
                  <ProgressBar label='80%' variant="info" now={80} />
                  <br/>
                  <label className='expertise-tags'>NoSQL(MongoDB)</label>
                  <ProgressBar label='60%' variant="info" now={60} />
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Frontend <i className="fa fa-chevron-circle-down right-arrow" aria-hidden="true"></i>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <div>
                  <label className='expertise-tags'>HTML/CSS</label>
                  <ProgressBar label='80%' variant="success" now={80} />
                  <br/>
                  <label className='expertise-tags'>JQuery</label>
                  <ProgressBar label='70%' variant="success" now={70} />
                  <br/>
                  <label className='expertise-tags'>ReactJS</label>
                  <ProgressBar label='70%' variant="success" now={70} />
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              DevOps <i className="fa fa-chevron-circle-down right-arrow" aria-hidden="true"></i>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <div>
                  <label className='expertise-tags'>Google Cloud</label>
                  <ProgressBar label='70%' variant="info" now={70} />
                  <br/>
                  <label className='expertise-tags'>AWS</label>
                  <ProgressBar label='60%' variant="info" now={60} />
                  <br/>
                  <label className='expertise-tags'>Docker/Kubernetes</label>
                  <ProgressBar label='50%' variant="info" now={50} />
                </div>
              </Card.Body>  
            </Accordion.Collapse>
          </Card>
        </Accordion>
        </div>
   
       </div>
    );
  }
}
