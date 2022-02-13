import { Box } from '@chakra-ui/react';
import React, { Component } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import Icon from '../src/Icon';
import NextImage from 'next/image';
import { MdMoreVert } from 'react-icons/md';

class ExploreComponent extends Component {
  state = {
    a: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ],
    b: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  };
  scrollHandle1 = () => {
    const { albumsAndSinglesRef, setPrev1, setNext1 } = this.props;
    const isEnd =
      albumsAndSinglesRef.current.scrollLeft +
        albumsAndSinglesRef.current.offsetWidth ==
      albumsAndSinglesRef.current.scrollWidth;
    const isBegin = albumsAndSinglesRef.current.scrollLeft == 0;
    setPrev1(!isBegin);
    setNext1(!isEnd);
  };
  scrollHandle2 = () => {
    const { topSongsRef, setPrev2, setNext2 } = this.props;
    const isEnd =
      topSongsRef.current.scrollLeft + topSongsRef.current.offsetWidth ==
      topSongsRef.current.scrollWidth;
    const isBegin = topSongsRef.current.scrollLeft == 0;
    setPrev2(!isBegin);
    setNext2(!isEnd);
  };
  scrollHandle3 = () => {
    const { moodsAndGenresRef, setPrev3, setNext3 } = this.props;
    const isEnd =
      moodsAndGenresRef.current.scrollLeft +
        moodsAndGenresRef.current.offsetWidth ==
      moodsAndGenresRef.current.scrollWidth;
    const isBegin = moodsAndGenresRef.current.scrollLeft == 0;
    setPrev3(!isBegin);
    setNext3(!isEnd);
  };
  scrollHandle4 = () => {
    const { trendingRef, setPrev4, setNext4 } = this.props;
    const isEnd =
      trendingRef.current.scrollLeft + trendingRef.current.offsetWidth ==
      trendingRef.current.scrollWidth;
    const isBegin = trendingRef.current.scrollLeft == 0;
    setPrev4(!isBegin);
    setNext4(!isEnd);
  };
  componentDidMount = () => {
    const { albumsAndSinglesRef, topSongsRef, moodsAndGenresRef, trendingRef } =
      this.props;

    if (albumsAndSinglesRef?.current) {
      this.scrollHandle1();
      albumsAndSinglesRef.current.addEventListener(
        'scroll',
        this.scrollHandle1
      );
    }
    if (topSongsRef?.current) {
      this.scrollHandle2();
      topSongsRef.current.addEventListener('scroll', this.scrollHandle2);
    }
    if (moodsAndGenresRef?.current) {
      this.scrollHandle3();
      moodsAndGenresRef.current.addEventListener('scroll', this.scrollHandle3);
    }
    if (trendingRef?.current) {
      this.scrollHandle4();
      trendingRef.current.addEventListener('scroll', this.scrollHandle4);
    }

    return () => {
      albumsAndSinglesRef?.current?.removeEventListener(
        'scroll',
        this.scrollHandle1
      );
      topSongsRef?.current?.removeEventListener('scroll', this.scrollHandle2);
      moodsAndGenresRef?.current?.removeEventListener(
        'scroll',
        this.scrollHandle3
      );
      trendingRef?.current?.removeEventListener('scroll', this.scrollHandle4);
    };
  };

  slideAlbumsAndSinglesPrev1 = () => {
    this.props.albumsAndSinglesRef.current.scrollLeft -=
      this.props.albumsAndSinglesRef.current.scrollLeft;
  };
  slideAlbumsAndSinglesNext1 = () => {
    this.props.albumsAndSinglesRef.current.scrollLeft +=
      this.props.albumsAndSinglesRef.current.offsetWidth;
  };

  slideMixPrev2 = () => {
    this.props.topSongsRef.current.scrollLeft -= 420.5;
  };
  slideMixNext2 = () => {
    this.props.topSongsRef.current.scrollLeft +=
      this.props.topSongsRef.current.offsetWidth;
  };
  slideMixPrev3 = () => {
    this.props.moodsAndGenresRef.current.scrollLeft -= 420.5;
  };
  slideMixNext3 = () => {
    this.props.moodsAndGenresRef.current.scrollLeft +=
      this.props.moodsAndGenresRef.current.offsetWidth;
  };
  slideMixPrev4 = () => {
    this.props.trendingRef.current.scrollLeft -= 420.5;
  };
  slideMixNext4 = () => {
    this.props.trendingRef.current.scrollLeft +=
      this.props.trendingRef.current.offsetWidth;
  };

  artistsFunc = (artists) => {
    let a = '';

    for (let i = 0; i < artists.length; i++) {
      if (i == artists.length - 1) {
        a = a + artists[i].name;
      } else {
        a = a + artists[i].name + ' & ';
      }
    }
    return a;
  };

  render() {
    const {
      prev1,
      next1,
      albumsAndSinglesRef,
      albumsAndSingles,
      musicID,
      musicPlay,
      prev2,
      next2,
      topSongsRef,
      prev3,
      next3,
      moodsAndGenresRef,
      moodsAndGenres,
      trendingRef,
      prev4,
      next4,
    } = this.props;

    return (
      <div className="bg-black mx-[45px] pt-16">
        <div className="flex justify-center items-center mt-9 space-x-6">
          <div className="bg-[#292929] w-[405.33px] h-[56px] px-6 rounded-md flex items-center hover:bg-[#212121] transition-all cursor-pointer">
            <Icon name="newReleases" color="#aaa" size={24} />
            <p className="text-white font-bold text-xl ml-5">New releases</p>
          </div>
          <div className="bg-[#292929] w-[405.33px] h-[56px] px-6 rounded-md flex items-center hover:bg-[#212121] transition-all cursor-pointer">
            <Icon name="charts" color="#aaa" size={24} />
            <p className="text-white font-bold text-xl ml-5">Charts</p>
          </div>
          <div className="bg-[#292929] w-[405.33px] h-[56px] px-6 rounded-md flex items-center hover:bg-[#212121] transition-all cursor-pointer">
            <Icon name="moodsAndGenres" color="#aaa" size={24} />
            <p className="text-white font-bold text-xl ml-5">Moods & genres</p>
          </div>
        </div>

        <div className="mt-24">
          <div>
            <div className="flex items-end">
              <p className="text-white font-bold text-3xl ">
                New albums & singles
              </p>
              <p className="text-[#aaa] ml-9 font-semibold text-sm">SEE ALL</p>
            </div>

            <div className="relative">
              {prev1 && (
                <button
                  className="navigate-1 prev-navigate-1"
                  onClick={this.slideAlbumsAndSinglesPrev1}
                >
                  <Icon name="prev" size={24} />
                </button>
              )}
              {next1 && (
                <button
                  onClick={this.slideAlbumsAndSinglesNext1}
                  className="navigate-1 next-navigate-1"
                >
                  <Icon name="next" size={24} />
                </button>
              )}

              <ScrollContainer
                innerRef={albumsAndSinglesRef}
                className="scroll-container-1"
                vertical={false}
              >
                {albumsAndSingles?.data?.map((albumOrSingle) => (
                  <div className="scroll-item" key={albumOrSingle._id}>
                    <div className="relative mix-image lg:w-[187.6px] lg:h-[187.6px]">
                      <NextImage
                        src={albumOrSingle.image_url}
                        alt={albumOrSingle.name}
                        width="200%"
                        priority={true}
                        className="rounded-md"
                        height="200%"
                        objectFit="contain"
                        _hover={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.502),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)),url('${albumOrSingle.image_url}');`,
                          transition: 'all 500ms ease;',
                        }}
                      />
                      <Box className="">
                        <div className="mix-more-vert">
                          <Icon name="moreVert" size={24} color="#fff" />
                        </div>
                        <div
                          className={
                            musicPlay && musicID == albumOrSingle._id
                              ? 'mix-play opacity-60'
                              : 'mix-play'
                          }
                          onClick={() => {
                            setTimeout(() => {
                              dispatch(trueChangeValue());
                              dispatch(changeValueMusicID(albumOrSingle._id));
                              if (musicID == albumOrSingle._id && musicPlay) {
                                dispatch(falseChangeValueMusicPlay());
                              } else {
                                dispatch(trueChangeValueMusicPlay());
                              }
                            }, 1000);
                          }}
                        >
                          {musicPlay && musicID == albumOrSingle._id ? (
                            <div>
                              <div className="youtube-stop-icon-1">
                                <Icon
                                  name="youtubeStop"
                                  color="#fff"
                                  size={24}
                                />
                              </div>
                              <div className="music-sound-icon-1">
                                <Icon
                                  name="musicSound"
                                  color="#fff"
                                  size={24}
                                />
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
                      <p className="mix-first-text">{albumOrSingle.name}</p>
                      <p className="mix-second-text truncate">
                        {albumOrSingle.kind} •{' '}
                        {this.artistsFunc(albumOrSingle.artists)}
                      </p>
                    </div>
                  </div>
                ))}
              </ScrollContainer>
            </div>
          </div>
          <div className="mt-28">
            <div className="flex items-end">
              <p className="text-white font-bold text-3xl ">Top Songs</p>
              <p className="text-[#aaa] ml-9 font-semibold text-sm">SEE ALL</p>
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
                innerRef={topSongsRef}
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
                      w="48px"
                      _hover={{ width: '48px', height: '48px' }}
                      h="48px"
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
                    <div className="flex items-center ml-1 mr-4">
                      {i == 0 ? (
                        <Icon name="point" color="#aaa" size={24} />
                      ) : i % 2 == 0 ? (
                        <Icon name="topDirection" color="#2ba640" size={24} />
                      ) : (
                        <Icon name="bottomDirection" color="#f00" size={24} />
                      )}
                      <p className="text-white font-semibold ml-1 text-lg">
                        {ai}
                      </p>
                    </div>
                    <div className="ml-4 truncate">
                      <p className="font-semibold w-max cursor-pointer truncate">
                        Whatever It Takes
                      </p>
                      <div className="flex items-center">
                        <p className="text-[#ffffffB3] font-semibold truncate inline-block cursor-pointer hover:underline">
                          Imagine Dragons
                        </p>
                        <p className="text-[#ffffffB3] inline-block ml-1">
                          &bull;
                        </p>
                        <p className="text-[#ffffffB3] font-semibold inline-block ml-1 truncate cursor-pointer hover:underline">
                          Evolve
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
          {/* <div className="mt-28">
            <div className="flex items-end">
              <p className="text-white font-bold text-3xl ">Moods & genres</p>
              <p className="text-[#aaa] ml-9 font-semibold text-sm">SEE ALL</p>
            </div>

            <div className="relative">
              {prev3 && (
                <button
                  className="navigate-3 prev-navigate-3"
                  onClick={this.slideMixPrev3}
                >
                  <Icon name="prev" size={24} />
                </button>
              )}
              {next3 && (
                <button
                  onClick={this.slideMixNext3}
                  className="navigate-3 next-navigate-3"
                >
                  <Icon name="next" size={24} />
                </button>
              )}
              <ScrollContainer
                innerRef={moodsAndGenresRef}
                className="scroll-container-3"
                vertical={false}
              >
                {moodsAndGenres?.map((moodOrGenre, i) => (
                  <div
                    key={moodOrGenre._id}
                    className={`w-[190.66px] mx-[10px] my-[6px] h-[48px] border-l-[6px] px-3 bg-[#292929] hover:bg-[#212121] transition-all cursor-pointer rounded-md flex items-center`}
                    style={{
                      borderColor: moodOrGenre.color,
                    }}
                  >
                    <p className="text-sm font-semibold">{moodOrGenre.name}</p>
                  </div>
                ))}
              </ScrollContainer>
            </div>
          </div> */}
          <div className="mt-28 mb-36">
            <div className="flex items-end">
              <p className="text-white font-bold text-3xl ">Trending</p>
              <p className="text-[#aaa] ml-9 font-semibold text-sm">SEE ALL</p>
            </div>
            <div className="relative">
              {prev4 && (
                <button
                  className="navigate-2 prev-navigate-2"
                  onClick={this.slideMixPrev4}
                >
                  <Icon name="prev" size={24} />
                </button>
              )}
              {next4 && (
                <button
                  onClick={this.slideMixNext4}
                  className="navigate-2 next-navigate-2"
                >
                  <Icon name="next" size={24} />
                </button>
              )}
              <ScrollContainer
                innerRef={trendingRef}
                className="scroll-container-2"
                vertical={false}
              >
                {this.state.b.map((ai, i) => (
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
                      w="48px"
                      _hover={{ width: '48px', height: '48px' }}
                      h="48px"
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
                    <div className="flex items-center ml-5 mr-3">
                      <p className="text-white font-semibold ml-1 text-lg">
                        {ai}
                      </p>
                    </div>
                    <div className="ml-4 truncate">
                      <p className="font-semibold w-max cursor-pointer truncate">
                        Whatever It Takes
                      </p>
                      <div className="flex items-center">
                        <p className="text-[#ffffffB3] font-semibold truncate inline-block cursor-pointer hover:underline">
                          Imagine Dragons
                        </p>
                        <p className="text-[#ffffffB3] inline-block ml-1">
                          &bull;
                        </p>
                        <p className="text-[#ffffffB3] font-semibold inline-block ml-1 truncate cursor-pointer hover:underline">
                          Evolve
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
        </div>
      </div>
    );
  }
}

export default ExploreComponent;
