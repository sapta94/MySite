import React, { Component } from 'react';
import {Pie} from "react-chartjs-2";
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
        <div className='container'>
        <Pie data={expertData} options={options} 
            onElementsClick={elems => {
                console.log(elems[0]._datasetIndex + ', ' + elems[0]._index)
            }}
        />
        </div>
       </div>
    );
  }
}
