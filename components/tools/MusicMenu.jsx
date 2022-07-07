import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import {
  changeCurrentMusic,
  changeCurrentIndex,
  changeCurrentTime,
  changeDuration,
  changeCurrentPercentage,
} from '../../store/currentMusicSlice';
import {
  falseChangeValueMusicPlay,
  trueChangeValueMusicPlay,
} from '../../store/musicPlaySlice';
import NextImage from 'next/image';

function MusicMenu({
  setClickedTime,
  setMS,
  ms,
  setCurMus,
  audioRef,
  volume,
  clickedTime,
  setAudioState,
}) {
  const musicMenu = useSelector((state) => state.musicMenu.value);
  const currentMusic = useSelector((state) => state.currentMusic.music);
  const currentMusicList = useSelector((state) => state.currentMusic.musics);
  const currentIndex = useSelector((state) => state.currentMusic.currentIndex);
  const currentTime = useSelector((state) => state.currentMusic.currentTime);
  const duration = useSelector((state) => state.currentMusic.duration);

  const [menuState, setMenuState] = useState('Up Next');
  const [lyrics, setLyrics] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setMS(musicMenu);

    if (currentMusic?.lyrics) {
      setLyrics(JSON.stringify(currentMusic?.lyrics).split('\\n'));
    } else {
      setLyrics([]);
    }
  }, [setMS, musicMenu, setLyrics, currentMusic]);

  const changeMusic = async (i) => {
    setClickedTime(null);

    if (audioRef.current.play()) {
      await audioRef.current.pause();
      await dispatch(falseChangeValueMusicPlay());
    }

    setAudioState(false);
    await dispatch(changeCurrentIndex(currentIndex + 1));

    await setCurMus(currentMusic);
    await setAudioState(true);

    audioRef.current.volume = volume / 100;
    audioRef.current.currentTime = 0;

    const setAudioData = () => {
      dispatch(changeDuration(audioRef.current.duration));
      dispatch(changeCurrentTime(audioRef.current.currentTime));
    };

    const setAudioTime = () => {
      dispatch(changeCurrentTime(audioRef.current.currentTime));
    };

    audioRef.current.addEventListener('loadeddata', setAudioData);

    audioRef.current.addEventListener('timeupdate', setAudioTime);

    if (clickedTime && clickedTime !== currentTime) {
      audioRef.current.currentTime = clickedTime;
      setClickedTime(null);
    }

    dispatch(changeCurrentPercentage((currentTime / duration) * 100));

    setTimeout(() => {
      audioRef.current.play();
      dispatch(trueChangeValueMusicPlay());
    }, 400);
  };

  return (
    <div>
      <div
        className={
          musicMenu && ms
            ? 'bg-black z-40 text-blue-100 space-y-6 py-7 mt-16 h-[550px] px-2 w-full inset-0 transform fixed -translate-y-0 transition duration-500 ease-in-out'
            : 'bg-black z-40 text-blue-100 w-full h-[550px] mt-16 space-y-6 py-7 px-2 inset-0 transform fixed translate-y-full transition duration-500 ease-in-out'
        }
      >
        <div className="flex">
          {currentMusicList?.map((music, i) => (
            <div
              h="450px"
              className={`${
                currentIndex == i
                  ? 'flex justify-center items-center'
                  : 'hidden'
              } w-3/5 h-full`}
              key={music._id}
            >
              <NextImage
                src={music?.image_url}
                alt={music?.name}
                width="400px"
                priority={true}
                height="400px"
                objectFit="contain"
              />
            </div>
          ))}

          <div className="w-2/5">
            <Flex className="w-full items-start mt-10 mr-5 justify-center">
              <button
                className={`text-white font-semibold text-sm py-4 px-10 w-[150px] transition-all" ${
                  menuState == 'Up Next'
                    ? 'border-b-[1px] border-b-white'
                    : 'border-b-[1px] border-b-[#1d1d1d]'
                }`}
                onClick={() => {
                  setMenuState('Up Next');
                }}
              >
                <p>UP NEXT</p>
              </button>
              {currentMusic?.lyrics ? (
                <button
                  className={`text-white font-semibold text-sm py-4 px-10 w-[150px] transition-all" ${
                    menuState == 'Lyrics'
                      ? 'border-b-[1px] border-b-white'
                      : 'border-b-[1px] border-b-[#1d1d1d]'
                  }`}
                  onClick={() => {
                    setMenuState('Lyrics');
                  }}
                >
                  <p>LYRICS</p>
                </button>
              ) : (
                <button
                  className={`text-[#4b4b4b] font-semibold text-sm py-4 px-10 w-[150px] border-b-[1px] border-b-[#1d1d1d]`}
                >
                  <p>LYRICS</p>
                </button>
              )}
              <button
                className={`text-white font-semibold text-sm py-4 px-10 w-[150px] transition-all" ${
                  menuState == 'Related'
                    ? 'border-b-[1px] border-b-white'
                    : 'border-b-[1px] border-b-[#1d1d1d]'
                }`}
                onClick={() => {
                  setMenuState('Related');
                }}
              >
                <p>RELATED</p>
              </button>
            </Flex>
            {menuState == 'Up Next' ? (
              <div className="overflow-y-auto h-[400px]">
                {currentMusicList?.map((music, i) => (
                  <Flex
                    justify="center"
                    key={music?._id}
                    align="center"
                    className={`h-14 space-x-4 mx-[2.64rem]  ${
                      currentIndex == i ? 'bg-[#1d1d1d]' : ''
                    } border-b-[1px] border-b-[#1d1d1d]`}
                    onClick={() => {
                      dispatch(changeCurrentIndex(i));
                      changeMusic(i);
                      dispatch(changeCurrentMusic(music));
                    }}
                  >
                    <NextImage
                      src={music?.image_url}
                      alt={music?.name}
                      width="32px"
                      priority={true}
                      height="32px"
                      objectFit="contain"
                    />
                    <div className="w-80">
                      <p className="font-semibold text-white">{music?.name}</p>
                      <div className="truncate flex">
                        {music?.artists.map((artist) => (
                          <p
                            className="text-[#a4a4a4] font-semibold text-sm mr-3"
                            key={artist?._id}
                          >
                            {artist?.name}
                          </p>
                        ))}
                      </div>
                    </div>
                    <p className="text-[#a4a4a4] text-sm">{music?.duration}</p>
                  </Flex>
                ))}
              </div>
            ) : null}
            {menuState == 'Lyrics' && currentMusic.lyrics ? (
              <div className="overflow-y-auto h-[400px] py-5 ml-10">
                {lyrics?.map((lyric, i) => {
                  if (lyric == '') {
                    return <br key={i} />;
                  } else if (i == 0) {
                    return (
                      <p className="text-white font-semibold text-sm" key={i}>
                        {lyric.replace('"', '')}
                      </p>
                    );
                  } else if (i == lyrics.length - 1) {
                    return (
                      <p className="text-white font-semibold text-sm" key={i}>
                        {lyric.replace('"', '')}
                      </p>
                    );
                  } else {
                    return (
                      <p className="text-white font-semibold text-sm" key={i}>
                        {lyric}
                      </p>
                    );
                  }
                })}
                <p className="text-[#aaa] text-sm font-semibold mt-4">
                  Source: {currentMusic?.lyricSource}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicMenu;
