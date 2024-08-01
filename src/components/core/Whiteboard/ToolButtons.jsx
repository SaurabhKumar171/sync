import React, { useState } from 'react'
import { TOOLS } from '../../../utils/Constants'

const ToolButtons = ({ tool, handleToolChange, fillColor, setFillColor }) => {

  return (
    <div className='border border-black w-4/12'>

      <button
            className={  
                `${tool === TOOLS?.SELECT} ? 
                "bg-[#fff] p-1 rounded": 
                "p-1 hover:bg-richblack-300 rounded"`
            }
            onClick={() => handleToolChange(TOOLS?.SELECT)}
      >
          { TOOLS?.SELECT }
      </button>

      <button
            className={  
                `${tool === TOOLS?.RECTANGLE} ? 
                "bg-[#fff] p-1 rounded": 
                "p-1 hover:bg-richblack-300 rounded"`
            }
            onClick={() => handleToolChange(TOOLS?.RECTANGLE)}
      >
          { TOOLS?.RECTANGLE }
      </button>

      <button
            className={  
                `${tool === TOOLS?.CIRCLE} ? 
                "bg-[#fff] p-1 rounded": 
                "p-1 hover:bg-richblack-300 rounded"`
            }
            onClick={() => handleToolChange(TOOLS?.CIRCLE)}
      >
          { TOOLS?.CIRCLE }
      </button>

      <button
            className={  
                `${tool === TOOLS?.ARROW} ? 
                "bg-[#fff] p-1 rounded": 
                "p-1 hover:bg-richblack-300 rounded"`
            }
            onClick={() => handleToolChange(TOOLS?.ARROW)}
      >
          { TOOLS?.ARROW }
      </button>

      <button
          className={  
                        `${tool === TOOLS?.SCRIBBLE} ? 
                        "bg-[#fff] p-1 rounded": 
                        "p-1 hover:bg-richblack-300 rounded"`
                    }
          onClick={() => handleToolChange(TOOLS?.SCRIBBLE)}
      >
          { TOOLS?.SCRIBBLE }
      </button>

      <button
          className={  
                        `${tool === TOOLS?.ERASE} ? 
                        "bg-[#fff] p-1 rounded": 
                        "p-1 hover:bg-richblack-300 rounded"`
                    }
          onClick={() => handleToolChange(TOOLS?.ERASE)}
      >
          Eraser
      </button>

      <button>
          <input
                value={fillColor}
                onChange={(e) => setFillColor(e.target.value)}
                type='color'
                className='w-6 h-6'
          />
      </button>

      <button>
                    
      </button>
  </div>
  )
}

export default ToolButtons
