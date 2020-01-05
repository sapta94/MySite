import React, { Component } from 'react';
import {Pie} from "react-chartjs-2";
import {Card} from "react-bootstrap"
const expertData = {
    labels: [
      'BackEnd',
      'FrontEnd',
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
      '#FF6384',
      '#36A2EB',
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
        boxWidth: 10
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
        <div className='container'>
        <Pie data={expertData} options={options} 
            onElementsClick={elems => {
                // if required to build the URL, you can 
                // get datasetIndex and value index from an `elem`:
                console.log(elems[0]._datasetIndex + ', ' + elems[0]._index)
            }}
        />
        </div>
       </div>
    );
  }
}
