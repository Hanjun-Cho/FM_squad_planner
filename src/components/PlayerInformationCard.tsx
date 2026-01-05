import { useState } from "react";
import './PlayerInformationCard.css';

function PlayerInformationCard() {
  var [playerData, setPlayerData] = useState({
    'playerName' : 'Rio Ngumoha',
    'overallAbility' : 'Rotation',
    'rightFoot': 'Very Strong',
    'leftFoot' : 'Fairly Strong',
    'strengths' : ['1v1'],
    'weaknesses' : ['Defensive Awareness','Aerial Duels'],
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
        <div className="player-name-ability-container">
          <span className='player-name'>{playerData['playerName']}</span>
          <span>({playerData['overallAbility']})</span>
        </div>

        <div className='player-descriptors-list-container'>
          {
            playerData['strengths'].map((element,i) => {
              return <span key={i} className='player-descriptor' style={playerStrengthStyle}>{element}</span>
            })
          }

          {
            playerData['weaknesses'].map((element,i) => {
              return <span key={i} className='player-descriptor' style={playerWeaknessStyle}>{element}</span>
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
