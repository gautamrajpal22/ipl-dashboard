import React, { Component } from 'react'
import ChartSample from "./Chart"
import data from "./../assets/batsmen.json"
let playerData = data.overAll;
console.log(playerData)
const axisLabel = playerData.map( data => data.batsman)
const label1 = "Total runs (2008 - 2016)"
const label2 = ""
const data1 = playerData.map( data => data.total_runs)
export class Batsmen extends Component {

    render() {
        return (
            <div>
                <ChartSample heading = "Top Ten Batsmen" axisLabel = {axisLabel} data2 = {[]} data1 = {data1} label1 ={ label1} label2 = {label2} />
            </div>
        )
    }
}

export default Batsmen
