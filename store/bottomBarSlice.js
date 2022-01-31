import { createSlice } from '@reduxjs/toolkit';

export const BottomBarSlice = createSlice({
  name: 'bottomBar',
  initialState: {
    value: false,
  },
  reducers: {
    trueChangeValue: (state) => {
      state.value = true;
    },
    falseChangeValue: (state) => {
      state.value = false;
    },
  },
});

export const { trueChangeValue,falseChangeValue } = BottomBarSlice.actions;

export default BottomBarSlice.reducer;
