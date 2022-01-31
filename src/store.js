import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../store/headerSlice';
import bottomBarReducer from '../store/bottomBarSlice';
import MusicMenuReducer from '../store/musicMenuSlice';
import MusicPlaySlice from '../store/musicPlaySlice';
import MusicIDSlice from '../store/musicIDSlice';
import CurrentMusicSlice from '../store/currentMusicSlice';

export default configureStore({
  reducer: {
    header: headerReducer,
    bottomBar: bottomBarReducer,
    musicMenu: MusicMenuReducer,
    musicPlay: MusicPlaySlice,
    musicID: MusicIDSlice,
    currentMusic: CurrentMusicSlice,
  },
});
