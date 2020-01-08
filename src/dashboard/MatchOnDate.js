import React, { Component } from 'react'
import '../styling/MatchOnDate.css'

const imageStyle = {
    width: "200px",
    height: "300px",
}

export class MatchOnDate extends Component {

    render() {
        return (
            <div className = "matchResultContainer">
                        <div className = "matchResult">
                            <div className = "teamsLogo">
                                <img style = {imageStyle} src = {require(`../assets/img/team-logo/${this.props.teamName.split(' ').join('_')}.png`)}/>
                                <div className = "versus"> Vs</div>
                                <img style = {imageStyle} src = {require(`../assets/img/team-logo/${this.props.opponentTeam.split(' ').join('_')}.png`)}/>
                            </div>
                            <div className = "resultText"> {this.props.winnerName} won the match by {this.props.wonBy} {this.props.winType} </div>
                        </div>
            </div>
        )
    }
}

export default MatchOnDate
