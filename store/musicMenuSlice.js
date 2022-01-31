import { createSlice } from '@reduxjs/toolkit';

export const MusicMenuSlice = createSlice({
  name: 'musicMenu',
  initialState: {
    value: false,
  },
  reducers: {
    trueChangeValueMusicMenu: (state) => {
      state.value = true;
    },
    falseChangeValueMusicMenu: (state) => {
      state.value = false;
    },
    changeValue: (state) => {
      state.value = !state.value;
    },
  },
});

export const {
  changeValue,
  trueChangeValueMusicMenu,
  falseChangeValueMusicMenu,
} = MusicMenuSlice.actions;

export default MusicMenuSlice.reducer;
