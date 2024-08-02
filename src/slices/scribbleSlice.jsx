import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const scribblesSlice = createSlice({
  name: 'scribbles',
  initialState,
  reducers: {
    setScribbles: (state, action) => action.payload,
    addScribble: (state, action) => [...state, action.payload],
  },
});

export const { setScribbles, addScribble } = scribblesSlice.actions;
export default scribblesSlice.reducer;
