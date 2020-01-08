import React, {Component} from 'react';
import { Select, MenuItem } from '@material-ui/core';
import "../styling/Season.css";
import seasonData from "../assets/seasonAward.json"
import MatchOnDate from './MatchOnDate';

const styleSpan = {
    marginRight: "15px",
    fontSize: "15px"
}

const imageStyle = {
    width: "200px",
    height: "300px",
}
export default class Season extends Component {
    constructor(props){
        console.log(props)
        super(props)
        this.state = {
            year:null,
            orangeCapPlayer:"",
            purpleCapPlayer:"",
            maxSixesPlayer:"",
            orangeCapPlayerMatches: null,
            purpleCapPlayerMatches: null,
            maxSixesPlayerMatches: null,
            maxRun: null,
            maxWicket: null,
            maxSixes: null,
            seasonFinalist1:"",
            seasonFinalist2:"",
            matchDates: [],
            selectedDate : "",
            matchDetails:[],
            matchOnADate: [],
        }
    }
    componentDidMount(){
        const yearData = seasonData.filter( seasonDetail => seasonDetail.year === this.props.year)[0]
        console.log("yearData is ", yearData.awards)
        const awards = yearData.awards;
        const seasonResult = yearData.season_result;
        const matchDetails = yearData.match_details;
        const matchDates = matchDetails.map( matchDetail => matchDetail.Match_Date);

        console.log(matchDates)
        this.setState({
            year:null,
            orangeCapPlayer:awards.Orange_Cap.name,
            purpleCapPlayer:awards.Purple_Cap.name,
            maxSixesPlayer:awards.Maximum_Sixes.name,
            orangeCapPlayerMatches: awards.Orange_Cap.matches,
            purpleCapPlayerMatches: awards.Purple_Cap.matches,
            maxSixesPlayerMatches: awards.Maximum_Sixes.matches,
            maxRun: awards.Orange_Cap.runs,
            maxWicket: awards.Purple_Cap.wickets,
            maxSixes: awards.Maximum_Sixes.sixes,
            seasonFinalist1: seasonResult[0],
            seasonFinalist2: seasonResult[1],
            matchDates: [...new Set(matchDates)],
            matchDetails : matchDetails
        })
    }

    selectDate = async (e) => {
        const matchDate = e.target.value;
        await this.setState({
            selectedDate: matchDate
        })

        const matchDetails = this.state.matchDetails;
        const matchOnADate = matchDetails.filter( item => item.Match_Date === matchDate)
        this.setState({
            matchOnADate: matchOnADate,
        })
        console.log(matchOnADate)
    }

    render() {
        
        return (
            <div className = "season">
                <span className = "topTitle"> AWARDS </span>
                <div className = "awards">
                    <div className = "orangeCap">
                        <span style = {{fontSize: "28px"}}>ORANGE CAP</span>
                        <span className = "title"> {this.state.orangeCapPlayer}</span>
                        <div className = "details">
                            <span style = {styleSpan}>
                                Matches: {this.state.orangeCapPlayerMatches}
                            </span>
                            {'     '}
                            <span style = {styleSpan}>
                                Run: {this.state.maxRun}
                            </span>
                        </div>
                    </div>
                    <div className = "purpleCap">
                        <span style = {{fontSize: "28px"}}>PURPLE CAP</span>
                        <span className = ""> {this.state.purpleCapPlayer} </span>
                        <div className = "details">
                            <span style = {styleSpan}>
                                Matches: {this.state.purpleCapPlayerMatches}
                            </span>
                            {'     '}
                            <span style = {styleSpan}>
                                Wickets: {this.state.maxWicket}
                            </span>
                        </div>
                        
                    </div>
                    <div className = "maxSixes">
                        <span style = {{fontSize: "28px"}}>MAXIMUM SIXES</span>
                        <span className = ""> Name: {this.state.maxSixesPlayer}</span>
                        <div className = "details">
                            <span style = {styleSpan}>
                                Matches: {this.state.maxSixesPlayerMatches}
                            </span>
                            {'     '}
                            <span style = {styleSpan}>
                                Sixes: {this.state.maxSixes}
                            </span>
                        </div>
                    </div>
                </div>
                <div className = "horizontalLine"> </div>
                <div className = "seasonStats">
                    { this.state.seasonFinalist1.length && 
                    <div className = "seasonResultContainer">
                        <span> <h2 className = "statsText">SEASON RESULTS</h2> </span>
                        <div className = "seasonResult">
                            <h3> 1ST </h3>
                            <img style = {imageStyle} src = {require(`../assets/img/team-logo/${this.state.seasonFinalist1.split(' ').join('_')}.png`)}/>
                            <div className = "versus"> Vs</div>
                            <h3>2ND</h3>
                            <img style = {imageStyle} src = {require(`../assets/img/team-logo/${this.state.seasonFinalist2.split(' ').join('_')}.png`)}/>
                        </div>
                    </div>}

                    <div className = "matchDetailsContainer">
                        <div className = "matchDetails">
                            <span className = "statsText"><h2 > MATCH DETAILS </h2></span>
                            <div className = "dropdown">
                            <Select  value={this.state.selectedDate} onChange ={(e) => {this.selectDate(e)}}>
                                {
                                this.state.matchDates.map((date => <MenuItem value = {date} >{date}</MenuItem>
                                ))}
                            </Select>
                            </div>
                        </div>
                        <div className = "matchData">
                            {
                                this.state.matchOnADate.map((match => 
                                <MatchOnDate teamName = {match.Team_Name}
                                            opponentTeam = {match.Opponent_Team}
                                            winType = {match.Win_Type}
                                            wonBy = {match.Won_By} 
                                            winnerName = {match.Match_Winner}></MatchOnDate>))
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}