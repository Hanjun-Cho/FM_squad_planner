import { useEffect, useRef, useState } from 'react';
import './Pitch.css';
import { useDraggable } from '@dnd-kit/core';

function PitchPlayer(
  {position, coordinates, window, selectedPlayer}: 
  {
    position: string,
    coordinates: {'top': string, 'left': string},
    window: () => {width: number, height: number},
    selectedPlayer: string
  }) {
  const elementRef = useRef<HTMLDivElement|null>(null);
  const [elementRect, setElementRect] = useState({'width': 0, 'height': 0});

  const {attributes, listeners, setNodeRef, transform} = useDraggable({
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
    'transform': transform ? 
      `translate3d(${-elementRect.width/2 + transform.x}px, ${-elementRect.height/2 + transform.y}px, 0)` :
      `translate(-${elementRect.width/2}px, -${elementRect.height/2}px)`,
    'backgroundColor': selectedPlayer == position ? 'blue' : 'red',
  }
  
  return (
    <div ref={setNodeRef} className="pitch-player-element" style={style} {...listeners} {...attributes}>
      <div ref={elementRef}/>
    </div>
  )
}

export default PitchPlayer;
