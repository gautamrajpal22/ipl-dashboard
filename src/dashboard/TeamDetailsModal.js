import React, { Component } from 'react'
import ChartSample from "./Chart"
import '../styling/TeamDetails.css'

const axisLabel = ["2008","2009","2010","2011", "2012", "2013", "2014", "2015", "2016"];
const label1 = "Matches won";
const label2 = "Total matches";

export class TeamDetailsModal extends Component {

    render() {
        const winningRate = this.props.winningRate;
        const totalMatchesPlayed = this.props.totalMatchesPlayed;
        return (
            <div className = "teamDetails">
                <span className = "topText">PERFORMANCE</span>
                <div className="statsContainer">
                    <span className = "teamStats"> Team Statistics: </span>
                    <div className = "totalMatches">
                        Total Matches : {totalMatchesPlayed}
                    </div>

                    <div className = "winningRate">
                        Winning Rate (%) : {winningRate.toFixed(2)}
                    </div>
                </div>

                <div className = "teamGraph">
                    <ChartSample axisLabel = {axisLabel} data2 = {this.props.allMatches} data1 = {this.props.allMatchesWon} label1 ={ label1} label2 = {label2} />
                </div>
            </div>
        )
    }
}

export default TeamDetailsModal
