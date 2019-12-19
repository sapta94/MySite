import React, { Component } from 'react';
import {Card} from "react-bootstrap"

export default class Expertise extends Component {
  render() {
    return (
      <div id='expertise'> 
        <div className='section-headers'>
            -Expertise-
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 '>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src='../../static/images/backend.png'/>
                    <Card.Body>
                        <Card.Title>Backend Development</Card.Title>
                        <Card.Text>
                        Have working experience on NodeJS, PHP and Java. But language won't be a barrier
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className='col-md-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../../static/images/ui.png" />
                    <Card.Body>
                        <Card.Title>Frontend Development</Card.Title>
                        <Card.Text>
                        Have worked extensively on ReactJS. Proficient with HTML,CSS and vanilla javascript.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className='col-md-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../../static/images/devops.png" />
                    <Card.Body>
                        <Card.Title>DevOps</Card.Title>
                        <Card.Text>
                        AWS,GCP,Docker & Kubernetes
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
       </div>
    );
  }
}
