import { createSlice } from '@reduxjs/toolkit';

const initialState = '#ff0000';

const fillInnerColorSlice = createSlice({
  name: 'fillInnerColor',
  initialState,
  reducers: {
    setFillInnerColor: (state, action) => action.payload,
  },
});

export const { setFillInnerColor } = fillInnerColorSlice.actions;
export default fillInnerColorSlice.reducer;
