import './Pitch.css';
import PitchPositionDroppable from './PitchPositionDroppable';
import type { WindowType } from '../Window';
import { getPositionCoordinates } from './PitchPositionsHelper';

function PitchPossiblePositions(
  {window}: 
  {
    window: () => WindowType
  }) {
  const allPossiblePositions = [
    'GK',
    'LB', 'LCB', 'CCB', 'RCB', 'RB',
    'LWB', 'LDM', 'CDM', 'RDM', 'RWB',
    'LM', 'LCM', 'CM', 'RCM', 'RM',
    'LW', 'LCAM', 'CAM', 'RCAM', 'RW',
    'LCF', 'CF', 'RCF'
  ]

  return (
    <div className='pitch-possible-positions-container'>
      {
        allPossiblePositions.map((position) => {
          return (
            <PitchPositionDroppable 
              key={position} 
              window={window} 
              position={position} 
              coordinates={getPositionCoordinates(position)}
            />
          )
        })
      }
    </div>
  )
}

export default PitchPossiblePositions;
