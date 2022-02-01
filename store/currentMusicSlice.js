import { createSlice } from '@reduxjs/toolkit';

export const CurrentMusicSlice = createSlice({
  name: 'currentMusic',
  initialState: {
    musics: [],
    music: {},
    currentTime: 0,
    duration: 0,
    currentIndex: 0,
  },
  reducers: {
    changeCurrentMusicAndMusicList: (state, action) => {
      state.musics = action.payload;
    },
    a: (state, action) => {
      state.music = action.payload[state.currentIndex];
    },
    changeCurrentMusic: (state, action) => {
      state.music = action.payload;
    },
    changeCurrentIndex: (state, action) => {
      if (action.payload >= state.musics.length) {
        state.currentIndex = 0;
      } else if (action.payload < 0) {
        state.currentIndex = state.musics.length - 1;
      } else {
        state.currentIndex = action.payload;
      }
      state.music = state.musics[state.currentMusic];
    },
    changeCurrentMusicIndex: (state, action) => {},
    changeCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    changeDuration: (state, action) => {
      state.duration = action.payload;
    },
  },
});

export const {
  changeCurrentMusic,
  changeCurrentTime,
  changeDuration,
  changeCurrentMusicAndMusicList,
  changeCurrentMusicIndex,
  changeCurrentIndex,
  a,
} = CurrentMusicSlice.actions;

export default CurrentMusicSlice.reducer;
