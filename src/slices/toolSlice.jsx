import { createSlice } from "@reduxjs/toolkit";


const initialState = 'SELECT';

const toolSlice = createSlice({
    name: 'tools',
    initialState,
    reducers: {
        setTool: (state, action) => action.payload,
    }
})

export const { setTool } = toolSlice.actions;
export default toolSlice.reducer;