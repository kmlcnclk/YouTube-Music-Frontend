import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../../store/musicMenuSlice';
import {
  changeValueMusicPlay,
  trueChangeValueMusicPlay,
  falseChangeValueMusicPlay,
} from '../../store/musicPlaySlice';
import { useRouter } from 'next/router';
import Icon from '../../src/Icon';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { Box } from '@chakra-ui/react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import MusicMenu from './MusicMenu';
import { changeCurrentIndex } from '../../store/currentMusicSlice';
import NextImage from 'next/image';

function BottomBar() {
  const dispatch = useDispatch();
  const musicMenu = useSelector((state) => state.musicMenu.value);
  const musicPlay = useSelector((state) => state.musicPlay.value);
  const currentMusic = useSelector((state) => state.currentMusic.music);
  const currentIndex = useSelector((state) => state.currentMusic.currentIndex);
  const currentMusicList = useSelector((state) => state.currentMusic.musics);
  const [clickedTime, setClickedTime] = useState(null);
  const [audio, setAudio] = useState(null);
  const [dur, setDur] = useState(null);
  const [curTime, setCurTime] = useState(null);
  const [volume, setVolume] = useState(30);
  const [volume2, setVolume2] = useState(30);
  const router = useRouter();
  const [curMus, setCurMus] = useState({});

  const [likeState, setLikeState] = useState(false);
  const [unLikeState, setUnLikeState] = useState(false);
  const [repeatState, setRepeatState] = useState('no repeat');
  const [soundState, setSoundState] = useState(false);
  const [sa, setSa] = useState(false);
  const [ms, setMS] = useState(false);
  const [curPercentage, setCurPercentage] = useState(null);

  useEffect(() => {
    router.prefetch('/');
    router.prefetch('/watch');

    setCurMus(currentMusic);
    const a = document.getElementById('audio');
    setAudio(a);

    if (a) {
      a.volume = volume / 100;
    }

    const setAudioData = () => {
      setDur(a.duration);
    };

    const setAudioTime = () => {
      setCurTime(a.currentTime);
      setCurPercentage((curTime / dur) * 100);

      if (a.currentTime == a.duration) {
        nextFunc();
      }
    };

    a.addEventListener('loadeddata', setAudioData);

    a.addEventListener('timeupdate', setAudioTime);

    if (curMus == currentMusic) {
      musicPlay ? a.play() : a.pause();
    }

    if (clickedTime && clickedTime !== curTime && sa) {
      console.log('sa');
      a.currentTime = clickedTime;
      setClickedTime(null);
    }

    return () => {
      a.removeEventListener('loadeddata', setAudioData);
      a.removeEventListener('timeupdate', setAudioTime);
    };
  }, [router, musicMenu, musicPlay]);

  const musicMenuFunc = () => {
    if (musicMenu) {
      setMS(false);
      setTimeout(() => {
        dispatch(changeValue());
      }, 500);
    } else {
      dispatch(changeValue());
    }
  };

  function formatDuration(duration) {
    return moment
      .duration(duration, 'seconds')
      .format('mm:ss', { trim: false });
  }

  const prevFunc = async () => {
    const b = document.getElementById('audio');
    setClickedTime(null);
    setCurTime(0);
    if (b.play()) {
      b.pause();
      await dispatch(falseChangeValueMusicPlay());
    }
    await dispatch(changeCurrentIndex(currentIndex - 1));

    await setCurMus(currentMusic);
    const a = await document.getElementById('audio');

    await setAudio(a);
    a.volume = volume / 100;
    a.currentTime = 0;
    const setAudioData = () => {
      setDur(a.duration);
      setCurTime(a.currentTime);
    };

    const setAudioTime = () => {
      setCurTime(a.currentTime);
    };

    a.addEventListener('loadeddata', setAudioData);

    a.addEventListener('timeupdate', setAudioTime);

    if (clickedTime && clickedTime !== curTime) {
      a.currentTime = clickedTime;
      setClickedTime(null);
    }

    setTimeout(() => {
      a.play();
      dispatch(trueChangeValueMusicPlay());
    }, 400);
  };

  const nextFunc = async () => {
    const b = document.getElementById('audio');
    setClickedTime(null);
    setCurTime(0);

    if (b.play()) {
      await b.pause();
      await dispatch(falseChangeValueMusicPlay());
    }

    await dispatch(changeCurrentIndex(currentIndex + 1));

    await setCurMus(currentMusic);
    const a = await document.getElementById('audio');
    setAudio(a);

    a.volume = volume / 100;
    a.currentTime = 0;

    const setAudioData = () => {
      setDur(a.duration);
      setCurTime(a.currentTime);
    };

    const setAudioTime = () => {
      setCurTime(a.currentTime);
    };

    a.addEventListener('loadeddata', setAudioData);

    a.addEventListener('timeupdate', setAudioTime);

    if (clickedTime && clickedTime !== curTime) {
      a.currentTime = clickedTime;
      setClickedTime(null);
    }

    setCurPercentage((curTime / dur) * 100);

    setTimeout(() => {
      a.play();
      dispatch(trueChangeValueMusicPlay());
    }, 400);
  };

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector('.bar__progress');
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = dur / barWidth;

    const a = document.getElementById('audio');

    a.currentTime = timePerPixel * clickPositionInBar;
    curPercentage = (a.currentTime / a.duration) * 100;
  }
  const handleTimeDrag = async (e) => {
    setSa(true);
    await calcClickedTime(e);

    const updateTimeOnMove = async (eMove) => {
      await calcClickedTime(eMove);
    };

    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  };

  return (
    <div>
      <div
        onMouseLeave={() => setSoundState(false)}
        className="w-full h-[72px] z-50 fixed bottom-0 bg-bottom-bar"
      >
        {currentMusicList?.map((music, i) => (
          <audio
            id={currentIndex == i ? 'audio' : ''}
            className={i == currentIndex ? 'block' : 'hidden'}
            key={music._id}
            crossOrigin="anonymous"
          >
            <source src={music?.song_url} />
            YouTube Music <code>audio</code> Song
          </audio>
        ))}
        {dur && curTime ? (
          <div className="bar">
            {curPercentage != null ? (
              <div>
                {currentMusicList?.map((music, i) => (
                  <div
                    className={`h-[3px] hover:h-[4.5px] cursor-pointer transition-all fixed w-full flex ${
                      currentIndex == i ? 'bar__progress block' : 'hidden'
                    }`}
                    style={{
                      background: `linear-gradient(to right, #f00 ${curPercentage}%, #4c4c4c  0)`,
                    }}
                    onMouseDown={(e) => handleTimeDrag(e)}
                    key={music._id}
                  >
                    <span
                      className="bar__progress__knob w-3 h-3 rounded-full bg-[#f00] relative border-[1px] border-[#f00]"
                      style={{ left: `${curPercentage - 0.5}%`, bottom: '4px' }}
                    ></span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
        <div className="w-full h-[72px] z-50 flex">
          <div className="w-[292px] h-[72px] flex px-4 items-center space-x-6">
            <div className="flex justify-center items-center space-x-6 ">
              <Icon
                name="bottomBarPrev"
                onClickFunc={prevFunc}
                size={24}
                color="#fff"
                className="cursor-pointer"
              />
              {musicPlay ? (
                <Icon
                  name="youtubeStop"
                  size={40}
                  color="#fff"
                  className="cursor-pointer"
                  onClickFunc={() => dispatch(changeValueMusicPlay())}
                />
              ) : (
                <Icon
                  name="youtubePlay"
                  size={40}
                  color="#fff"
                  className="cursor-pointer"
                  onClickFunc={() => dispatch(changeValueMusicPlay())}
                />
              )}
              <Icon
                name="bottomBarNext"
                size={24}
                color="#fff"
                onClickFunc={nextFunc}
                className="cursor-pointer"
              />
            </div>
            {currentMusicList?.map((music, i) => (
              <div
                className={`${currentIndex == i ? 'block' : 'hidden'}`}
                key={music._id}
              >
                <p className="text-[#AAAAAA] text-xs">
                  {formatDuration(curTime)} / {music.duration}
                </p>
              </div>
            ))}
          </div>
          {currentMusicList?.map((music, i) => (
            <div
              className={`w-[766px] h-[72px] ${
                currentIndex == i
                  ? 'flex justify-between items-center'
                  : 'hidden'
              }`}
              key={music._id}
            >
              <div className="w-1/12 h-[72px]" onClick={musicMenuFunc}></div>
              <div className="w-auto h-[72px] flex justify-center items-center space-x-4">
                <NextImage
                  src={music?.image_url}
                  alt={music?.name}
                  width="40px"
                  priority={true}
                  height="40px"
                  objectFit="contain"
                />
                <div>
                  <p className="font-semibold text-white">{music?.name}</p>
                  <div className="flex items-center space-x-1">
                    <p className="font-semibold text-[#ffffffB3] hover:underline cursor-pointer truncate">
                      {music?.album_or_single?.name}
                    </p>
                    <p className="text-[#ffffffB3] inline-block">&bull;</p>
                    {music?.artists?.map((artist, i) => {
                      if (music.artists.length == 1) {
                        return (
                          <p
                            className="font-semibold text-[#ffffffB3] hover:underline cursor-pointer truncate"
                            key={i}
                          >
                            {artist.name}
                          </p>
                        );
                      } else if (music.artists.length > 1) {
                        if (music.artists[music.artists.length - 1] == artist) {
                          return (
                            <p
                              className="font-semibold text-[#ffffffB3] hover:underline cursor-pointer truncate"
                              key={i}
                            >
                              {artist.name}
                            </p>
                          );
                        } else {
                          return (
                            <div className="flex" key={i}>
                              <p className="font-semibold text-[#ffffffB3] hover:underline cursor-pointer truncate">
                                {artist.name}
                              </p>
                              <p className="ml-1 text-[#ffffffB3] font-semibold">
                                &
                              </p>
                            </div>
                          );
                        }
                      }
                    })}
                    <p className="text-[#ffffffB3] inline-block">&bull;</p>
                    <p className="font-semibold text-[#ffffffB3] hover:underline cursor-pointer">
                      {music?.publicationYear}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className="rounded-full w-10 h-10 hover:bg-[#121212] flex items-center justify-center transition-all cursor-pointer"
                    onClick={() => {
                      setUnLikeState(!unLikeState);
                      setLikeState(false);
                    }}
                  >
                    {unLikeState ? (
                      <Icon name="fillUnLike" size={24} />
                    ) : (
                      <Icon name="unFillUnLike" size={24} />
                    )}
                  </div>
                  <div
                    className="rounded-full w-10 h-10 hover:bg-[#121212] flex items-center justify-center transition-all cursor-pointer"
                    onClick={() => {
                      setLikeState(!likeState);
                      setUnLikeState(false);
                    }}
                  >
                    {likeState ? (
                      <Icon name="fillLike" size={24} />
                    ) : (
                      <Icon name="unFillLike" size={24} />
                    )}
                  </div>
                  <div className="rounded-full w-10 h-10 hover:bg-[#121212] flex items-center justify-center transition-all cursor-pointer">
                    <Icon name="moreVert" size={24} color="#909090" />
                  </div>
                </div>
              </div>
              <div className="w-1/12 h-[72px]" onClick={musicMenuFunc}></div>
            </div>
          ))}

          <div className="w-[292px] h-[72px] flex justify-end items-center pr-3">
            <div className="justify-center items-center flex mr-1">
              {soundState ? (
                <Slider
                  aria-label="slider"
                  colorScheme="whiteAlpha"
                  color="white"
                  defaultValue={volume}
                  value={volume}
                  step={5}
                  w="60px"
                  className="transition-all"
                  h="1px"
                  onChange={(e) => {
                    setVolume(e);
                    setVolume2(e);
                    audio.volume = e / 100;
                  }}
                >
                  <SliderTrack bgColor="#909090" h="2px">
                    <SliderFilledTrack bgColor="white" />
                  </SliderTrack>
                  <SliderThumb _focus={{ ring: '0px' }} />
                </Slider>
              ) : null}
            </div>
            <div className="flex justify-center items-center space-x-6 px-4">
              <div className="sound" onMouseEnter={() => setSoundState(true)}>
                {volume == 0 ? (
                  <Icon
                    name="musicSoundMute"
                    color="#909090"
                    onClickFunc={() => {
                      setVolume(volume2);
                      audio.volume = volume2 / 100;
                    }}
                    size={24}
                    className="cursor-pointer"
                  />
                ) : (
                  <Icon
                    name="musicSound"
                    onClickFunc={() => {
                      setVolume(0);
                      audio.volume = 0 / 100;
                    }}
                    color="#909090"
                    size={24}
                    className="cursor-pointer"
                  />
                )}
              </div>
              <div>
                {repeatState == 'no repeat' ? (
                  <div onClick={() => setRepeatState('repeat all')}>
                    <Icon
                      name="repeat"
                      color="#909090"
                      size={24}
                      className="cursor-pointer"
                    />
                  </div>
                ) : null}
                {repeatState == 'repeat all' ? (
                  <div onClick={() => setRepeatState('repeat one')}>
                    <Icon
                      name="repeat"
                      color="#fff"
                      size={24}
                      className="cursor-pointer"
                    />
                  </div>
                ) : null}
                {repeatState == 'repeat one' ? (
                  <div onClick={() => setRepeatState('no repeat')}>
                    <Icon
                      name="repeatOne"
                      color="#fff"
                      size={24}
                      className="cursor-pointer"
                    />
                  </div>
                ) : null}
              </div>
              <Icon
                name="shuffle"
                color="#909090"
                size={24}
                className="cursor-pointer"
              />
            </div>
            <div onClick={musicMenuFunc} className="pl-2">
              {musicMenu ? (
                <Icon
                  name="bottomDirection"
                  color="#fff"
                  size={32}
                  className="cursor-pointer"
                />
              ) : (
                <Icon
                  name="topDirection"
                  color="#fff"
                  size={32}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {musicMenu ? (
        <MusicMenu
          {...{
            setClickedTime,
            setMS,
            ms,
            setCurTime,
            setCurMus,
            setAudio,
            setDur,
            volume,
            clickedTime,
            curTime,
          }}
        />
      ) : null}
    </div>
  );
}

export default BottomBar;
