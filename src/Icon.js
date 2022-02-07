import {
  PrevIcon,
  NextIcon,
  YoutubeMusicIcon,
  SearchIcon,
  ConnectCastIcon,
  MoreVertIcon,
  YTMusicIcon,
  FillLikeIcon,
  FillUnLikeIcon,
  UnFillLikeIcon,
  UnFillUnLikeIcon,
  YoutubePlayIcon,
  BottomBarPrevIcon,
  BottomBarNextIcon,
  YoutubeStopIcon,
  MusicSoundIcon,
  RepeatIcon,
  MusicSoundMuteIcon,
  RepeatOneIcon,
  ShuffleIcon,
  TopDirectionIcon,
  BottomDirectionIcon,
  NewReleasesIcon,
  ChartsIcon,
  MoodsAndGenresIcon,
  PointIcon,
} from './Icons';

const Icon = ({ name, size, height, width, onClickFunc, color, className }) => {
  const icons = {
    prev: PrevIcon,
    next: NextIcon,
    youtubeMusic: YoutubeMusicIcon,
    search: SearchIcon,
    connectCast: ConnectCastIcon,
    moreVert: MoreVertIcon,
    ytMusic: YTMusicIcon,
    fillLike: FillLikeIcon,
    fillUnLike: FillUnLikeIcon,
    unFillLike: UnFillLikeIcon,
    unFillUnLike: UnFillUnLikeIcon,
    youtubePlay: YoutubePlayIcon,
    bottomBarPrev: BottomBarPrevIcon,
    bottomBarNext: BottomBarNextIcon,
    youtubeStop: YoutubeStopIcon,
    musicSound: MusicSoundIcon,
    repeat: RepeatIcon,
    musicSoundMute: MusicSoundMuteIcon,
    repeatOne: RepeatOneIcon,
    shuffle: ShuffleIcon,
    topDirection: TopDirectionIcon,
    bottomDirection: BottomDirectionIcon,
    newReleases: NewReleasesIcon,
    charts: ChartsIcon,
    moodsAndGenres: MoodsAndGenresIcon,
    point: PointIcon,
  };

  const Component = icons[name];
  if (size) {
    return (
      <Component
        size={size}
        onClickFunc={onClickFunc}
        color={color}
        className={className}
      />
    );
  } else if (height && width) {
    return (
      <Component
        width={width}
        height={height}
        onClickFunc={onClickFunc}
        color={color}
        className={className}
      />
    );
  }
};

export default Icon;
