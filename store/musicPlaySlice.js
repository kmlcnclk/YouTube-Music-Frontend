import { createSlice } from '@reduxjs/toolkit';

export const MusicPlaySlice = createSlice({
  name: 'musicPlay',
  initialState: {
    value: false,
  },
  reducers: {
    trueChangeValueMusicPlay: (state) => {
      state.value = true;
    },
    falseChangeValueMusicPlay: (state) => {
      state.value = false;
    },
    changeValueMusicPlay: (state) => {
      state.value = !state.value;
    },
  },
});

export const {
  trueChangeValueMusicPlay,
  falseChangeValueMusicPlay,
  changeValueMusicPlay,
} = MusicPlaySlice.actions;

export default MusicPlaySlice.reducer;
