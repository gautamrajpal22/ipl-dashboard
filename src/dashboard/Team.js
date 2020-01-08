import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileDataFunc from '../assets/tileData';
import TeamDetailsModal from './TeamDetailsModal';
import Modal from './Modal';

const tileData = tileDataFunc();
console.log(tileData)

const modalStyle = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0,0.5)"
	}
};

const mainStyle = {
	app: {
		margin: "120px 0"
	},
	button: {
    backgroundColor: "rgb(7, 61, 92)",
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 10,
		backgroundColor: "#408cec",
		border: 0,
		padding: "12px 20px",
		color: "black",
		margin: "0 auto",
		width: 150,
		display: "block",
		borderRadius: 3
	}
};

const styles =  { root: {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  overflow: 'hidden',
  backgroundColor: "white",
  paddingTop: "70px",
  paddingLeft: "0px"
},
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
},
}

  const images = {
    height: '100%',
    width: '100%',
}

export default class TitlebarGridList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      winningRate: 0,
      totalMatchesPlayed: 0,
      allMatches: [],
      allMatchesWon : [],
      isModalOpen: false,
			isInnerModalOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

	closeModal() {
		this.setState({
      isModalOpen: false,
      show:false
		});
	}

  showModal = async (allMatches, allMatchesWon) => {
    const totalMatchesPlayed = allMatches.reduce( (a, b) => a + b + 0);
    const totalMatchesWon = allMatchesWon.reduce( (a, b) => a + b + 0);
    const winningRate = (totalMatchesWon / totalMatchesPlayed) * 100;
    await this.setState({
      ...this.state,
      show: !this.state.show,
      winningRate: winningRate,
      totalMatchesPlayed: totalMatchesPlayed,
      allMatches: allMatches,
      allMatchesWon : allMatchesWon,
      isModalOpen: true
    });
  }

  render(){
  
  return (
    <div style = {styles.root}>
      <GridList cellHeight={240} cols= {4} >
        {tileData.map(tile => (
          <GridListTile key={tile.image}>
            <img style={images} src={tile.image} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              actionIcon={
                <IconButton onClick={() =>this.showModal(tile.totalMatches, tile.totalMatchesWon)} aria-label={`info about ${tile.name}`} style = {styles.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      {this.state.isModalOpen ?
      <Modal
					isModalOpen={this.state.isModalOpen}
					closeModal={this.closeModal}
					style={modalStyle}
				>
					
          <TeamDetailsModal show={this.state.show} 
                            winningRate = {this.state.winningRate} 
                            totalMatchesPlayed = {this.state.totalMatchesPlayed} 
                            allMatches = {this.state.allMatches} 
                            allMatchesWon = {this.state.allMatchesWon} />

					<button
						style={{
              ...mainStyle.button,
              backgroundColor: "rgb(7, 61, 92)",
              fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
							margin: 0,
							width: "auto",
              marginTop: 10,
              color: 'white',
						}}
						onClick={this.closeModal}
					>
						Close
					</button>
				</Modal> : ""}
    </div>
  );
  }
}