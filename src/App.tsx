import './App.css'
import PlayerInformationCard from './components/PlayerInformationCard'
import Pitch from './components/Pitch'
import Window from './Window'
import { useEffect, useState } from 'react'

function App() {
  const [pitchDimension, setPitchDimension] = useState({'width': -1, 'height': -1});

  let mainContainerStyle = {
    'display': 'grid',
    'gridTemplateColumns': (pitchDimension['width'] + (Window().height - pitchDimension["height"])) + 'px auto'
  }

  let playerInformationContainerStyle = {
    'width': (Window().width - pitchDimension['width'] - (4 * (Window().height - pitchDimension["height"])) / 3) + 'px',
  }

  let playerInformationSubContainerStyle = {
    'width': '100%',
    'height': pitchDimension["height"],
  }

  return (
    <div className='main-container' style={mainContainerStyle}>
      <div className='pitch-grid-container'>
        <Pitch window={Window} setPitchDimension={setPitchDimension}/>
      </div> 
      <div className='player-information-container' style={playerInformationContainerStyle}>
        <div className='player-information-sub-container' style={playerInformationSubContainerStyle}>
          <div className='player-information-cards'>
            <PlayerInformationCard/>
            <PlayerInformationCard/>
            <PlayerInformationCard/>
            <PlayerInformationCard/>
            <PlayerInformationCard/>
            <PlayerInformationCard/>
            <PlayerInformationCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
