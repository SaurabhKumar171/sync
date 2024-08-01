import React, { useState } from 'react';
import DrawingStage from '../components/core/Whiteboard/DrawingStage';
import ToolButtons from '../components/core/Whiteboard/ToolButtons';
import { TOOLS } from '../utils/Constants';

const WhiteBoard = () => {
  const [tool, setTool] = useState(TOOLS?.SELECT);
  const [scribble, setScribble] = useState([]);
  const [fillColor, setFillColor] = useState("#ff0000");

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
      />
      <DrawingStage 
        tool={tool} 
        scribble={scribble} 
        setScribble={setScribble} 
        fillColor={fillColor} 
      />
    </div>
  );
};

export default WhiteBoard;
