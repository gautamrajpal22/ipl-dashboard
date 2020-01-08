import KKR from './img/team-logo/Kolkata_Knight_Riders.png';
import CSK from './img/team-logo/Chennai_Super_Kings.png';
import DD from './img/team-logo/Delhi_Daredevils.png';
import DC from './img/team-logo/Deccan_Chargers.png';
import GL from './img/team-logo/Gujarat_Lions.png';
import KTK from './img/team-logo/Kochi_Tuskers_Kerala.png';
import KXIP from './img/team-logo/Kings_XI_Punjab.png';
import MI from './img/team-logo/Mumbai_Indians.png';
import PW from './img/team-logo/Pune_Warriors.png';
import RC from './img/team-logo/Royal_Challengers_Bangalore.png';
import RPS from './img/team-logo/Rising_Pune_Supergiant.png';
import RR from './img/team-logo/Rajasthan_Royals.png';
import SH from './img/team-logo/Sunrisers_Hyderabad.png';

export default function tileDataFunc() {
  const tileData =[
    {
      "image": KKR,
      "name": "Kolkata Knight Riders",
      "photo": "./img/team-photo/Kolkata_Knight_Riders.jpg",
      "short": "KKR",
      "width": "72px",
      "marginTop": "0px",
      "color": "linear-gradient( 135deg, #3B2667F1 10%, #BC78ECC1 100%)",
      "totalMatches": [13, 13, 14, 15, 17, 16, 16, 13, 15],
      "totalMatchesWon": [6, 3, 7, 8, 12, 6, 11, 7, 8],
      "tie": {
        "win": 0,
        "lose": 2
      },
      "bestResult": {
        "position": "1st",
        "year": [2012, 2014]
      }
    },
    {
      "image": RC,
      "name": "Royal Challenges Bangalore",
      "photo": "./img/team-photo/Royal_Challengers_Bangalore.jpg",
      "short": "RCB",
      "width": "80px",
      "marginTop": "0px",
      "color": "linear-gradient( 135deg, #f3ab00f7 10%, #f9de8cb5 100%)",
      "totalMatches": [14, 16, 16, 16, 15, 16, 14, 16, 16],
      "totalMatchesWon": [4, 9, 8, 10, 8, 9, 5, 8, 9],
      "tie": {
        "win": 1,
        "lose": 0
      },
      "bestResult": {
        "position": "2nd",
        "year": [2009, 2011]
      }
    },
    {
      "image": CSK,
      "name": "Chennai Super Kings",
      "photo": "./img/team-photo/Chennai_Super_Kings.jpg",
      "short": "CSK",
      "width": "121px",
      "marginTop": "0px",
      "color": "linear-gradient( 135deg, #F8D800C1 10%, #FDEB71F1 100%)",
      "totalMatches": [16, 14, 16, 16, 18, 18, 16, 17, 0],
      "totalMatchesWon": [9, 8, 9, 11, 10, 12, 10, 10, 0],
      "tie": {
        "win": 0,
        "lose": 1
      },
      "bestResult": {
        "position": "1st",
        "year": [2010, 2011]
      }
    },
    {
      "image": KXIP,
      "name": "King XI Punjab",
      "photo": "./img/team-photo/Kings_XI_Punjab.jpg",
      "short": "KXIP",
      "width": "94px",
      "marginTop": "0px",
      "color": "linear-gradient( 135deg, #e01111f1 10%, #945a5ac1 100%)",
      "totalMatches": [15, 14, 14, 14, 16, 16, 17, 14, 14],
      "totalMatchesWon": [10, 7, 4, 7, 8, 8, 12, 3, 4],
      "tie": {
        "win": 0,
        "lose": 0
      },
      "bestResult": {
        "position": "1st",
        "year": [2014]
      }
    },
    {
      "image": RR,
      "name": "Rajasthan Royals",
      "photo": "./img/team-photo/Rajasthan_Royals.jpg",
      "short": "RR",
      "width": "120px",
      "marginTop": "0px",
      "color": "linear-gradient( 135deg, #6B73FFF1 10%, #000DFFC1 100%)",
      "totalMatches": [16, 13, 14, 13, 16, 18, 14, 14, 0],
      "totalMatchesWon": [13, 6, 6, 6, 7, 11, 7, 7, 0],
      "tie": {
        "win": 0,
        "lose": 1
      },
      "bestResult": {
        "position": "1st",
        "year": [2008]
      }
    },
    {
      "image": DD,
      "name": "Delhi Daredevils",
      "photo": "./img/team-photo/Delhi_Daredevils.jpg",
      "short": "DD",
      "width": "200px",
      "marginTop": "16px",
      "color": "linear-gradient( 135deg, #ff2924f2 10%, #c02826c7 100%)",
      "totalMatches": [14, 15, 14, 14, 18, 16, 14, 14, 14],
      "totalMatchesWon": [7, 10, 7, 4, 11, 3, 2, 5, 7],
      "tie": {
        "win": 0,
        "lose": 0
      },
      "bestResult": {
        "position": "3rd",
        "year": [2009, 2012]
      }
    },
    {
      "image": MI,
      "name": "Mumbai Indians",
      "photo": "./img/team-photo/Mumbai_Indians.jpg",
      "short": "MI",
      "width": "150px",
      "marginTop": "12px",
      "color": "linear-gradient( 135deg, #52E5E7F1 10%, #130CB7C1 100%)",
      "totalMatches": [14, 13, 16, 16, 17, 19, 15, 16, 14],
      "totalMatchesWon": [7, 5, 11, 10, 10, 13, 7, 10, 7],
      "tie": {
        "win": 0,
        "lose": 0
      },
      "bestResult": {
        "position": "1st",
        "year": [2013, 2015]
      }
    },
    {
      "image": DC,
      "name": "Deccan Chargers",
      "photo": "./img/team-photo/Deccan_Chargers.jpg",
      "short": "DC",
      "width": "100px",
      "marginTop": "0px",
      "color": "linear-gradient( 135deg, #97ABFFF1 10%, #123597C1 100%)",
      "totalMatches": [14, 16, 16, 14, 15, 0, 0, 0, 0],
      "totalMatchesWon": [2, 9, 8, 6, 4, 0, 0, 0, 0],
      "tie": {
        "win": 0,
        "lose": 0
      },
      "bestResult": {
        "position": "1st",
        "year": [2009]
      }
    },
    {
      "image": KTK,
      "name": "Kochi Tuskers Kerala",
      "photo": "./img/team-photo/Kochi_Tuskers_Kerala.jpg",
      "short": "KTK",
      "width": "127px",
      "marginTop": "11px",
      "color": "linear-gradient( 135deg, #FF6FD8F1 10%, #3813C2C1 100%)",
      "totalMatches": [0, 0, 0, 14, 0, 0, 0, 0, 0],
      "totalMatchesWon": [0, 0, 0, 6, 0, 0, 0, 0, 0],
      "tie": {
        "win": 0,
        "lose": 0
      },
      "bestResult": {
        "position": "8th",
        "year": [2011]
      }
    },
    {
      "image": PW,
      "name": "Pune Warrior",
      "photo": "./img/team-photo/Pune_Warriors.jpg",
      "short": "PW",
      "width": "200px",
      "marginTop": "0px",
      "color": "linear-gradient( 135deg, #bdbdbdeb 10%, #000000eb 100%)",
      "totalMatches": [0, 0, 0, 14, 16, 16, 0, 0, 0],
      "totalMatchesWon": [0, 0, 0, 4, 4, 4, 0, 0, 0],
      "tie": {
        "win": 0,
        "lose": 0
      },
      "bestResult": {
        "position": "8th",
        "year": [2013]
      }
    },
    {
      "image": SH,
      "name": "Sunrisers Hyderabad",
      "photo": "./img/team-photo/Sunrisers_Hyderabad.jpg",
      "short": "SH",
      "width": "150px",
      "marginTop": "0px",
      "color": "linear-gradient( 135deg, #FD6E6AF1 10%, #FFC600C1 100%)",
      "totalMatches": [0, 0, 0, 0, 0, 17, 14, 14, 17],
      "totalMatchesWon": [0, 0, 0, 0, 0, 10, 6, 7, 11],
      "tie": {
        "win": 1,
        "lose": 0
      },
      "bestResult": {
        "position": "1st",
        "year": [2016]
      }
    },
    {
      "image": RPS,
      "name": "Rising Pune Supergiant",
      "photo": "./img/team-photo/Rising_Pune_Supergiant.jpg",
      "short": "RPS",
      "width": "205px",
      "marginTop": "23px",
      "color": "linear-gradient( 135deg, #FF6FD8F1 10%, #3813C2C1 100%)",
      "totalMatches": [0, 0, 0, 0, 0, 0, 0, 0, 14],
      "totalMatchesWon": [0, 0, 0, 0, 0, 0, 0, 0, 5],
      "tie": {
        "win": 0,
        "lose": 0
      },
      "bestResult": {
        "position": "7th",
        "year": [2016]
      }
    },
    {
      "image": GL,
      "name": "Gujarat Lions",
      "photo": "./img/team-photo/Gujarat_Lions.jpg",
      "short": "GL",
      "width": "90px",
      "marginTop": "0px",
      "color": "linear-gradient( 135deg, #FCCF31F1 10%, #F55555C1 100%)",
      "totalMatches": [0, 0, 0, 0, 0, 0, 0, 0, 16],
      "totalMatchesWon": [0, 0, 0, 0, 0, 0, 0, 0, 9],
      "tie": {
        "win": 0,
        "lose": 0
      },
      "bestResult": {
        "position": "3rd",
        "year": [2016]
      }
    }
  ]
     return tileData;
    }