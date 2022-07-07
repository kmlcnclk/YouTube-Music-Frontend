import { createSlice } from '@reduxjs/toolkit';

export const CurrentMusicSlice = createSlice({
  name: 'currentMusic',
  initialState: {
    musics: [],
    music: {},
    currentTime: 0,
    duration: null,
    currentIndex: 0,
    currentPercentage: null,
    volume: 30,
  },
  reducers: {
    changeCurrentMusicAndMusicList: (state, action) => {
      state.musics = action.payload;
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
      state.music = state.musics[state.currentIndex];
    },
    changeCurrentMusicIndex: (state, action) => {},
    changeCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    changeDuration: (state, action) => {
      state.duration = action.payload;
    },
    changeCurrentPercentage: (state, action) => {
      state.currentPercentage = action.payload;
    },
    changeVolume: (state, action) => {
      state.volume = action.payload;
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
  changeCurrentPercentage,
  changeVolume,
} = CurrentMusicSlice.actions;

export default CurrentMusicSlice.reducer;
