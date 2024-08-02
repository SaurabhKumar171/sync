import { combineReducers } from "@reduxjs/toolkit";
import toolReducer from "../slices/toolSlice";
import fillColorReducer from "../slices/fillColorSlice";
import fillInnerColorReducer from "../slices/fillInnerColorSlice";
import rectangleReducer from "../slices/rectanglesSlice";
import scribbleReducer from "../slices/scribbleSlice";

const rootReducer  = combineReducers({
    tools : toolReducer,
    fillColor : fillColorReducer,
    fillInnerColor : fillInnerColorReducer,
    rectangles : rectangleReducer,
    scribble : scribbleReducer,
})

export default rootReducer