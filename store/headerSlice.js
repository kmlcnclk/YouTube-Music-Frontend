import { createSlice } from '@reduxjs/toolkit';

export const HeaderSlice = createSlice({
  name: 'header',
  initialState: {
    value: '/',
  },
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = HeaderSlice.actions;

export default HeaderSlice.reducer;
