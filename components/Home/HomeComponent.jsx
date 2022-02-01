import React, { Component } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import ScrollContainer from 'react-indiana-drag-scroll';
import Icon from '../../src/Icon';
import { MdMoreVert } from 'react-icons/md';
import { trueChangeValue } from '../../store/bottomBarSlice';
import {
  trueChangeValueMusicPlay,
  falseChangeValueMusicPlay,
} from '../../store/musicPlaySlice';
import { changeValueMusicID } from '../../store/musicIDSlice';
import { changeCurrentMusicAndMusicList } from '../../store/currentMusicSlice';

class HomeComponent extends Component {
  state = {
    a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  };

  componentDidMount = () => {
    // const { mix, setPrev1, setNext1, pick, setPrev2, setNext2 } = this.props;
    // if (mix.current) {
    //   const scrollHandle1 = () => {
    //     const isEnd =
    //       mix.current.scrollLeft + mix.current.offsetWidth ==
    //       mix.current.scrollWidth;
    //     const isBegin = mix.current.scrollLeft == 0;
    //     setPrev1(!isBegin);
    //     setNext1(!isEnd);
    //   };
    //   scrollHandle1();
    //   mix.current.addEventListener('scroll', scrollHandle1);
    // }
    // if (pick.current) {
    //   const scrollHandle2 = () => {
    //     const isEnd =
    //       pick.current.scrollLeft + pick.current.offsetWidth ==
    //       pick.current.scrollWidth;
    //     const isBegin = pick.current.scrollLeft == 0;
    //     setPrev2(!isBegin);
    //     setNext2(!isEnd);
    //   };
    //   scrollHandle2();
    //   pick.current.addEventListener('scroll', scrollHandle2);
    // }
    // if (mix.current && pick.current)
    //   return () => {
    //     mix?.current?.removeEventListener('scroll', scrollHandle1);
    //     pick?.current?.removeEventListener('scroll', scrollHandle2);
    //   };
    // else if (mix.current) {
    //   return () => {
    //     mix?.current?.removeEventListener('scroll', scrollHandle1);
    //   };
    // } else if (pick.current) {
    //   return () => {
    //     pick?.current?.removeEventListener('scroll', scrollHandle2);
    //   };
    // }
  };

  slideMixPrev1 = () => {
    this.props.mix.current.scrollLeft -= this.props.mix.current.scrollLeft;
  };
  slideMixNext1 = () => {
    this.props.mix.current.scrollLeft += this.props.mix.current.offsetWidth;
  };

  slideMixPrev2 = () => {
    this.props.pick.current.scrollLeft -= 420.5;
  };
  slideMixNext2 = () => {
    this.props.pick.current.scrollLeft += this.props.pick.current.offsetWidth;
  };

  artistsFunc = (artists) => {
    let a = '';

    for (let i = 0; i < artists.length; i++) {
      if (i == artists.length - 1) {
        a = a + artists[i];
      } else {
        a = a + artists[i] + ', ';
      }
    }
    return a;
  };

  getMusicFunc = async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/music/get20Music`);
    const data = await res.json();
    if (data) {
      if (data.success) {
        this.props.dispatch(changeCurrentMusicAndMusicList(data.data.musics));
      }
    }
  };

  render() {
    const {
      // mixeds,
      next1,
      prev1,
      mix,
      next2,
      prev2,
      pick,
      dispatch,
      musicPlay,
      musicID,
      bottomBar,
    } = this.props;

    return (
      <Box mx="45px" className={`${bottomBar ? 'mb-20' : ''}`}>
        {/* <div className="mb-14">
          <Heading size="lg" pt="96px" pb="16px">
            Mixed for you
          </Heading>

          <div className="relative">
            {prev1 && (
              <button
                className="navigate-1 prev-navigate-1"
                onClick={this.slideMixPrev1}
              >
                <Icon name="prev" size={24} />
              </button>
            )}
            {next1 && (
              <button
                onClick={this.slideMixNext1}
                className="navigate-1 next-navigate-1"
              >
                <Icon name="next" size={24} />
              </button>
            )}

            <ScrollContainer
              innerRef={mix}
              className="scroll-container-1"
              vertical={false}
            >
              {mixeds.data.map((mixed) => (
                <div className="scroll-item" key={mixed._id}>
                  <div className="relative mix-image">
                    <NextImage
                      src={mixed.image_url}
                      alt={mixed.name}
                      width="200%"
                      priority={true}
                      height="200%"
                      objectFit="contain"
                      _hover={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.502),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)),url('${mixed.image_url}');`,
                        transition: 'all 500ms ease;',
                      }}
                    />
                    <Box className="">
                      <div className="mix-more-vert">
                        <Icon name="moreVert" size={24} color="#fff" />
                      </div>
                      <div
                        className={
                          musicPlay && musicID == mixed._id
                            ? 'mix-play opacity-60'
                            : 'mix-play'
                        }
                        onClick={() => {
                          setTimeout(() => {
                            dispatch(trueChangeValue());
                            dispatch(changeValueMusicID(mixed._id));
                            if (musicID == mixed._id && musicPlay) {
                              dispatch(falseChangeValueMusicPlay());
                            } else {
                              dispatch(trueChangeValueMusicPlay());
                            }
                          }, 1000);
                        }}
                      >
                        {musicPlay && musicID == mixed._id ? (
                          <div>
                            <div className="youtube-stop-icon-1">
                              <Icon name="youtubeStop" color="#fff" size={24} />
                            </div>
                            <div className="music-sound-icon-1">
                              <Icon name="musicSound" color="#fff" size={24} />
                            </div>
                          </div>
                        ) : (
                          <Icon
                            name="youtubePlay"
                            onClickFunc={this.getMusicFunc}
                            color="#fff"
                            size={24}
                          />
                        )}
                      </div>
                    </Box>
                  </div>
                  <div className="mt-3 w-44 h-[72px]">
                    <p className="mix-first-text">{mixed.name}</p>
                    <p className="mix-second-text">
                      {this.artistsFunc(mixed.artists)}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollContainer>
          </div>
        </div> */}
        <div className="mb-14">
          <div className="pt-8 pb-4">
            <Text className="text-md text-[#AAA]">START RADIO FROM A SONG</Text>
            <Text fontSize="34px" className="font-bold">
              Quick picks
            </Text>
          </div>

          <div className="relative">
            {prev2 && (
              <button
                className="navigate-2 prev-navigate-2"
                onClick={this.slideMixPrev2}
              >
                <Icon name="prev" size={24} />
              </button>
            )}
            {next2 && (
              <button
                onClick={this.slideMixNext2}
                className="navigate-2 next-navigate-2"
              >
                <Icon name="next" size={24} />
              </button>
            )}
            <ScrollContainer
              innerRef={pick}
              className="scroll-container-2"
              vertical={false}
            >
              {this.state.a.map((ai, i) => (
                <div
                  key={ai}
                  className={
                    musicPlay && musicID == ai
                      ? 'pick-main-div bg-[#121212] '
                      : 'pick-main-div'
                  }
                >
                  <Box
                    bgImage={
                      musicPlay && musicID == ai
                        ? null
                        : '/whatever-it-takes.jpg'
                    }
                    className={
                      musicPlay && musicID == ai
                        ? 'pick-image-music-id'
                        : 'pick-image'
                    }
                    onClick={this.getMusicFunc}
                    bgSize="contain"
                  >
                    <div
                      className={
                        musicPlay && musicID == ai
                          ? 'pick-image-icon opacity-100 block'
                          : 'pick-image-icon'
                      }
                      onClick={() => {
                        setTimeout(() => {
                          dispatch(trueChangeValue());
                          dispatch(changeValueMusicID(ai));
                          if (musicID == ai && musicPlay) {
                            dispatch(falseChangeValueMusicPlay());
                          } else {
                            dispatch(trueChangeValueMusicPlay());
                          }
                        }, 1000);
                      }}
                    >
                      {musicPlay && musicID == ai ? (
                        <div>
                          <div className="youtube-stop-icon-2">
                            <Icon name="youtubeStop" color="#fff" size={24} />
                          </div>
                          <div className="music-sound-icon-2">
                            <Icon name="musicSound" color="#fff" size={24} />
                          </div>
                        </div>
                      ) : (
                        <Icon name="youtubePlay" color="#fff" size={24} />
                      )}
                    </div>
                  </Box>
                  <div className="ml-4 truncate">
                    <p className="font-semibold w-max cursor-pointer truncate">
                      Whatever It Takes
                    </p>
                    <div className="flex items-center">
                      <Icon name="ytMusic" size={18} />
                      <p className="text-[#ffffffB3] ml-1 truncate inline-block cursor-pointer hover:underline">
                        Imagine Dragons
                      </p>
                      <p className="text-[#ffffffB3] inline-block ml-1">
                        &bull;
                      </p>
                      <p className="text-[#ffffffB3] inline-block ml-1 truncate cursor-pointer hover:underline">
                        Evolve {ai}
                      </p>
                      <div className="pick-hid-div">
                        <Icon
                          name="unFillUnLike"
                          size={24}
                          className="cursor-pointer"
                        />
                        <Icon
                          name="unFillLike"
                          size={24}
                          className="cursor-pointer"
                        />
                        <MdMoreVert
                          size="24px"
                          className="text-[#909090] hover:text-white transition-all cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollContainer>
          </div>
        </div>

        <div className="flex items-center justify-center mb-11 mt-28">
          <NextImage
            src="/TR_992_X_304.png"
            alt="Artists"
            width="632px"
            priority={true}
            height="193.67px"
            objectFit="contain"
          />
          <div className="ml-12">
            <p className="mb-2 text-2xl font-bold ">
              Tell us which artists you like
            </p>
            <p className="mb-6 text-[#AAAAAA] text-sm">
              We&apos;ll create an experience just for you
            </p>
            <button className="font-semibold text-sm py-[10px] px-4 bg-[#121212] rounded-sm">
              LET&apos;S GO
            </button>
          </div>
        </div>
      </Box>
    );
  }
}

export default HomeComponent;
