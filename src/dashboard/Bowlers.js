import React, { Component } from 'react'
import ChartSample from "./Chart"
import data from "./../assets/bowlers.json"
let playerData = data.overAll;
console.log(playerData)
const axisLabel = playerData.map( data => data.bowler)
const label1 = "Total Overs (2008 - 2016)"
const label2 = "Economy"
const data1 = playerData.map( data => data.total_overs)
const data2 = playerData.map( data => data.economy)

export class Batsmen extends Component {

    render() {
        return (
            <div>
                <ChartSample heading = "Top Ten Bowlers" axisLabel = {axisLabel} data2 = {data2} data1 = {data1} label1 ={ label1} label2 = {label2} />
            </div>
        )
    }
}

export default Batsmen