import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const rectanglesSlice = createSlice({
  name: 'rectangles',
  initialState,
  reducers: {
    setRectangles: (state, action) => action.payload,
    addRectangle: (state, action) => [...state, action.payload],
  },
});

export const { setRectangles, addRectangle } = rectanglesSlice.actions;
export default rectanglesSlice.reducer;
