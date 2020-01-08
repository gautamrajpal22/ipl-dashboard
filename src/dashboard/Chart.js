import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          display: true
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      display: true
    },
    responsive: true,
    maintainAspectRatio: false
  }


export default class ChartSample extends Component{
    
    constructor(props) {
        super(props);
        console.log(props.axisLabel)
        this.state = {
            data: {
                labels: props.axisLabel,
                datasets: [
                    {
                        label: props.label1,
                        backgroundColor: "rgba(43, 159, 226,.75)",
                        data: props.data1
                    },
                    {
                        label: props.label2,
                        backgroundColor: props.label2 === "" ? "#FAFAFA": "rgb(7, 61, 92)",
                        data: props.data2
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div style = {{display: "block", width: "400px", height: "400px"}}>
                <h3> {this.props.heading} </h3>
                <Bar
                    options= {options}
                    data={this.state.data}/>
            </div>
        )
    }
}