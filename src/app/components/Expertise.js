import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {Card} from "react-bootstrap"
const expertData = {
    labels: [
      'Back-End',
      'Front-End',
      'DevOps'
    ],
    datasets: [{
      data: [50, 30, 20],
      backgroundColor: [
      '#003f5c',
      '#58508d',
      '#bc5090'
      ],
      hoverBackgroundColor: [
      '#FFCE56',
      '#FFCE56',
      '#FFCE56'
      ]
    }]
  };
  
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      position: 'top',
      labels: {
        boxWidth: 30,
        fontFamily: 'Vidaloka, serif',
        fontSize:20
      }
    },
    tooltips: {
      mode: 'label',
      callbacks: {
  
          title: function(tooltipItem, data) {
              return data.labels[tooltipItem[0].index]+ ' (Click for more)'
          },
          label: function(tooltipItem, data) {
            return  data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]+'%'
        },
      }
    }
  }

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
              Backend
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Frontend
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              DevOps
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        </div>
   
       </div>
    );
  }
}
