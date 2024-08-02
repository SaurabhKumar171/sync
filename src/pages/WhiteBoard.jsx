import React, { useState } from 'react';
import DrawingStage from '../components/core/Whiteboard/DrawingStage';
import ToolButtons from '../components/core/Whiteboard/ToolButtons';
import { useDispatch } from 'react-redux';
import { setTool } from '../slices/toolSlice';
import { setScribbles } from '../slices/scribbleSlice';

const WhiteBoard = () => {
  const dispatch = useDispatch();
  const [scribbles, setScribbles] = useState([]);
  const [fillColor, setFillColor] = useState("#ff0000");
  const [fillInnerColor, setFillInnerColor] = useState("#ff0000");
  const [rectangles , setRectangles] = useState([]);

  const handleToolChange = (tool) => {
    console.log("change --", tool);
    dispatch(setTool(tool));
  };

  return (
    <div>
      <ToolButtons 
        handleToolChange={handleToolChange} 
        fillColor={fillColor} 
        setFillColor={setFillColor}
        fillInnerColor={fillInnerColor}
        setFillInnerColor={setFillInnerColor}
      />
      <DrawingStage 
        scribbles={scribbles} 
        setScribbles={setScribbles} 
        rectangles={rectangles}
        setRectangles={setRectangles}
        fillColor={fillColor} 
        fillInnerColor={fillInnerColor}
      />
    </div>
  );
};

export default WhiteBoard;
