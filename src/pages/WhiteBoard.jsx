import React, { useState } from 'react';
import DrawingStage from '../components/core/Whiteboard/DrawingStage';
import ToolButtons from '../components/core/Whiteboard/ToolButtons';
import { TOOLS } from '../utils/Constants';

const WhiteBoard = () => {
  const [tool, setTool] = useState(TOOLS?.SELECT);
  const [scribbles, setScribbles] = useState([]);
  const [fillColor, setFillColor] = useState("#ff0000");
  const [fillInnerColor, setFillInnerColor] = useState("#ff0000");
  const [rectangles , setRectangles] = useState([]);

  const handleToolChange = (tool) => {
    setTool(tool);
    console.log("Tool value", tool);
  };

  return (
    <div>
      <ToolButtons 
        tool={tool} 
        handleToolChange={handleToolChange} 
        fillColor={fillColor} 
        setFillColor={setFillColor}
        fillInnerColor={fillInnerColor}
        setFillInnerColor={setFillInnerColor}
      />
      <DrawingStage 
        tool={tool} 
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
