import { useEffect, useRef, useState } from 'react';
import './Pitch.css';
import PitchBackgroud from './PitchBackground';
import PitchPlayer from './PitchPlayer';
import PitchPossiblePositions from './PitchPossiblePositions';
import { DndContext, type DragEndEvent, type DragStartEvent } from '@dnd-kit/core';
import type { WindowType } from '../Window';
import { getPositionCoordinates } from './PitchPositionsHelper';


function Pitch({window, setPitchDimension}: {window: () => WindowType, setPitchDimension: ({})}) {
  const pitchRef = useRef<HTMLDivElement|null>(null);
  const pitchContainerRef = useRef<HTMLDivElement|null>(null);
  const [pitchRect, setPitchRect] = useState({'height': 0});
  const [pitchContainerRect, setPitchContainerRect] = useState({'height': 0});
  const [isDragging, setIsDragging] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [formation, setFormation] = useState(['GK', 'LB', 'LCB', 'RCB', 'RB', 'LCM', 'RCM', 'LW', 'CAM', 'RW', 'CF']);
  
  useEffect(() => {
    if(pitchRef.current) {
      const pitch = pitchRef.current.getBoundingClientRect();
      setPitchRect(pitch);
      setPitchDimension({"width": pitch.width, "height": pitch.height});
    }

    if(pitchContainerRef.current) {
      setPitchContainerRect(pitchContainerRef.current.getBoundingClientRect()); 
    }
  }, [window()]);

  function handleDragStart(event: DragStartEvent) {
    if(event.active) {
      setSelectedPlayer(event.active.id.toString());
      setIsDragging(true);
      console.log("drag started", event.active.id);
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    if(event.collisions) {
      var droppedPosition = event.collisions[0].id.toString();
      
      if(droppedPosition == selectedPlayer) {
        console.log('selected', selectedPlayer);
        setIsDragging(false);
        return;
      }

      var index = formation.indexOf(selectedPlayer);
      if(index != -1) {formation.splice(index, 1);}
      formation.push(droppedPosition);
      setFormation(formation);
      setSelectedPlayer(droppedPosition);

      console.log("drag ended", droppedPosition);
    }

    setIsDragging(false);
  } 

  const style = {
    'left': ((pitchContainerRect.height - pitchRect.height) / 2) + 'px'
  }

  return (
    <div ref={pitchContainerRef} className="pitch-container">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div ref={pitchRef} style={style} className='pitch'>
          <PitchBackgroud/>
          { isDragging ? 
            <PitchPossiblePositions 
              window={window} 
            />
            : <></>
          }

          {
            formation.map((position) => {
              return <PitchPlayer key={position} position={position} coordinates={getPositionCoordinates(position)} window={window} selectedPlayer={selectedPlayer}/>
            })
          }
        </div>
      </DndContext>
    </div>
  )
}

export default Pitch;
