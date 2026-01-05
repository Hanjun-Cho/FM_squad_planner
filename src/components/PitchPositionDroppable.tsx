import { useRef, useState, useEffect } from 'react';
import './Pitch.css';
import { useDroppable } from '@dnd-kit/core';
import type { PositionCoordinates } from './PitchPositionsHelper';

function PitchPositionDroppable(
  { window, position, coordinates }:
  {
    window: () => {width: number, height: number},
    position: string
    coordinates: PositionCoordinates
  }) {
  const elementRef = useRef<HTMLDivElement|null>(null);
  const [elementRect, setElementRect] = useState({'width': 0, 'height': 0});
  
  const {isOver, setNodeRef} = useDroppable({
    id: position
  });

  useEffect(() => {
    if(elementRef.current) {
      setElementRect(elementRef.current.getBoundingClientRect()); 
    }
  }, [window()]);

  const style = {
    'top': coordinates['top'],
    'left': coordinates['left'],
    'transform': `translate(-${elementRect.width/2}px, -${elementRect.height/2}px)`,
    'backgroundColor': isOver ? 'green' : 'gray'
  }

  return (
    <div ref={elementRef} style={style} className='pitch-position-droppable'>
      <div ref={setNodeRef}></div>
    </div>
  )
}

export default PitchPositionDroppable;
