import { useState } from "react";
import './PlayerInformationCard.css';

function PlayerInformationCard() {
  var [playerData, setPlayerData] = useState({
    'playerName' : 'Rio Ngumoha',
    'overallAbility' : 'Rotation',
    'positions': ['LW', 'RW'],
    'rightFoot': 'Very Strong',
    'leftFoot' : 'Fairly Strong',
    'strengths' : [
      {
        'title': '1v1',
        'description': 'Ability to take on defenders using their exceptional manipulation of the ball' 
      },
    ],
    'weaknesses' : [
      {
        'title': 'Defensive Awareness',
        'description': 'Being able to read the defensive situation and understand where to be and what to do'
      },
      {
        'title': 'Aerial Duels',
        'description': 'Being capable of winning aerial duels through jumping and physical capabilities'
      }
    ],
    'traits' : [
      'Cuts Inside from Both Wings',
      'Runs with Ball Often'
    ]
  });

  const playerStrengthStyle = {
    'backgroundColor': 'green'
  }

  const playerWeaknessStyle = {
    'backgroundColor': 'red'
  }

  return (
    <div className='player-information-card'>
      <div className='player-basic-information-container'>
        <span className='player-name'>{playerData['playerName']}</span>

        <div className='player-position-list-container'>
          {
            playerData['positions'].map(element => {
              return element + " ";
            })
          }
        </div>

        <div className='player-descriptors-list-container'>
          {
            playerData['strengths'].map((element,i) => {
              return <span key={i} className='player-descriptor' style={playerStrengthStyle}>{element['title']}</span>
            })
          }

          {
            playerData['weaknesses'].map((element,i) => {
              return <span key={i} className='player-descriptor' style={playerWeaknessStyle}>{element['title']}</span>
            })
          }

          {
            playerData['traits'].map((element,i) => {
              return <span key={i} className='player-trait'>{element}</span>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default PlayerInformationCard; 
