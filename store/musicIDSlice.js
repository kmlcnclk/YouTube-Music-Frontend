import { createSlice } from '@reduxjs/toolkit';

export const MusicIDSlice = createSlice({
  name: 'musicID',
  initialState: {
    value: '',
  },
  reducers: {
    changeValueMusicID: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeValueMusicID } = MusicIDSlice.actions;

export default MusicIDSlice.reducer;
