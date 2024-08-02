import { createSlice } from '@reduxjs/toolkit';

const initialState = '#ff0000';

const fillColorSlice = createSlice({
  name: 'fillColor',
  initialState,
  reducers: {
    setFillColor: (state, action) => action.payload,
  },
});

export const { setFillColor } = fillColorSlice.actions;
export default fillColorSlice.reducer;
