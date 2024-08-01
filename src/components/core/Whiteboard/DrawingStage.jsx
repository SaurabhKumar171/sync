import React, { useRef } from 'react';
import { Arrow, Circle,  Layer, Line, Rect, Stage, Text , Transformer } from 'react-konva';
import { v4 as uuidv4 } from 'uuid';
import { TOOLS } from '../../../utils/Constants';

const DrawingStage = ({ tool, scribbles, setScribbles, rectangles, setRectangles, fillColor, fillInnerColor }) => {
  const isDrawing = useRef(false);
  const stageRef = useRef();
  const cuurentShapeId = useRef();

  const handleMouseDown = (e) => {

    // If drawing i disabled or tools is SELECT then do not daw anything
    if(TOOLS?.SELECT === tool) return;

    isDrawing.current = true;

    const stage = stageRef.current;
    const { x, y } = stage.getStage().getPointerPosition();
 
    
    const id = uuidv4();

    cuurentShapeId.current = id;

    switch(tool){
      case TOOLS.SCRIBBLE : 
        setScribbles((scribble) => [
                      ...scribble, 
                      { 
                        id, 
                        points: [x, y], 
                        color : fillColor 
                      }
                    ]);
        break;
      
      case TOOLS.RECTANGLE : 
        setRectangles((rectangle) => [
                        ...rectangle, 
                        { 
                          id, 
                          x, 
                          y,
                          width: 20,
                          height: 20,
                          color : fillColor,
                          fill : fillInnerColor,
                        }
                      ]);
        break;

      default:
          break;
    }

  };

  const handleMouseMove = (e) => {

      // If drawing i disabled or tools is SELECT then do not daw anything
      if(TOOLS?.SELECT === tool || !isDrawing.current) return;

      const stage = stageRef.current;
      const { x, y } = stage.getStage().getPointerPosition();


      switch(tool){
        case TOOLS.SCRIBBLE : 
          setScribbles((scribble) => 
            scribble.map((scribbleItem) => {
              if(scribbleItem.id === cuurentShapeId.current){
                return {
                  ...scribbleItem,
                  points: [...scribbleItem.points, x, y],
                  color : fillColor
                }
              }
              return scribbleItem;
            })
          );
          break;

        case TOOLS.RECTANGLE : 
          setRectangles((rectangle) => 
              rectangle.map((rectangleItem) => {
                if(rectangleItem.id === cuurentShapeId.current){
                  return {
                    ...rectangleItem,
                    width : x - rectangleItem.x,
                    height : y - rectangleItem.y,
                  }
                }
                return rectangleItem;
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
        
        {
          scribbles.map((line, i) => (
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
          ))
        }

        {
          rectangles.map((rectangle, i) => (
            <Rect
              key={i}
              x={rectangle.x}
              y={rectangle.y}
              width={rectangle.width}
              height={rectangle.height}
              stroke={rectangle.color}
              fill={rectangle.fill}
              strokeWidth={5}
              lineCap="round"
            />
          ))
        }

      </Layer>
  </Stage>
  )
}

export default DrawingStage
