import React, { useRef } from 'react';
import { Arrow, Circle,  Layer, Line, Rect, Stage, Text , Transformer } from 'react-konva';
import { v4 as uuidv4 } from 'uuid';
import { TOOLS } from '../../../utils/Constants';

const DrawingStage = ({ tool, scribble, setScribble, fillColor }) => {
  const isDrawing = useRef(false);
  const stageRef = useRef();
  const cuurentShapeId = useRef();

  const handleMouseDown = (e) => {

    // If drawing i disabled or tools is SELECT then do not daw anything
    if(TOOLS?.SELECT === tool || !isDrawing) return;

    const stage = stageRef.current;
    const { x, y } = stage.getPointerPosition();
    // const pos = e.target.getStage().getPointerPosition();
    // setScribble([...scribble, { tool, points: [pos.x, pos.y], color : fillColor }]);
    
    const id = uuidv4();

    cuurentShapeId.current = id;
    isDrawing.current = true;

    switch(tool){
      case TOOLS.SCRIBBLE : 
        setScribble((scribble) => [
                      ...scribble, 
                      { 
                        id, 
                        tool, 
                        points: [x, y], 
                        color : fillColor 
                      }
                    ]);
        break;

      default:
          break;
    }

  };

  const handleMouseMove = (e) => {

      // If drawing i disabled or tools is SELECT then do not daw anything
      if(TOOLS?.SELECT === tool || !isDrawing) return;

      const stage = stageRef.current;
      const { x, y } = stage.getPointerPosition();


      switch(tool){
        case TOOLS.SCRIBBLE : 
          setScribble((scribble) => 
            scribble.map((scribbleItem) => {
              if(scribbleItem.id === cuurentShapeId.current){
                return {
                  ...scribbleItem,
                  points: [...scribbleItem.points, [x, y]],
                  color : fillColor
                }
              }
              return scribbleItem;
            })
          );
          break;
  
        default:
            break;
      }
  };

  const handleMouseUp = () => {
      isDrawing.current = false;
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMousemove={handleMouseMove}
      onMouseup={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      ref={stageRef}
  >
      <Layer>
        <Text text="Just start drawing" x={5} y={30} />
        {scribble.map((line, i) => (
          <Line
            key={i}
            points={line.points}
            stroke={line.color}
            strokeWidth={5}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
            globalCompositeOperation={
              line.tool === 'eraser' ? 'destination-out' : 'source-over'
            }
          />
        ))}
      </Layer>
  </Stage>
  )
}

export default DrawingStage
