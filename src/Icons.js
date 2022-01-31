export const PrevIcon = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
    </svg>
  );
};

export const NextIcon = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
    </svg>
  );
};

export const YoutubeMusicIcon = ({ height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="12.18" cy="12" rx="12.18" ry="12" fill="red" />
      <ellipse
        cx="12.18"
        cy="12"
        rx="7.308"
        ry="7.2"
        fill="red"
        stroke="#fff"
        strokeWidth="1.2"
      />
      <path
        d="M9.744 15.545l6.327-3.544-6.327-3.546v7.09zM37.433 9.642c-.579 2.853-1.019 6.336-1.25 7.774h-.163c-.187-1.482-.627-4.942-1.227-7.75L33.31 2.677h-4.52v18.85h2.803V5.987l.277 1.451 2.85 14.086h2.804l2.803-14.086.3-1.459v15.547h2.804V2.676h-4.563l-1.435 6.966zM51.01 18.696c-.256.517-.81.876-1.368.876-.648 0-.904-.494-.904-1.706V7.754H45.54v10.29c0 2.54.856 3.706 2.758 3.706 1.296 0 2.338-.562 3.058-1.909h.07l.277 1.684h2.502V7.755h-3.198v10.94h.003zM60.392 13.19c-1.043-.742-1.691-1.236-1.691-2.314 0-.763.37-1.19 1.25-1.19.905 0 1.206.605 1.227 2.674l2.689-.111c.208-3.346-.928-4.74-3.87-4.74-2.733 0-4.078 1.19-4.078 3.638 0 2.224 1.113 3.235 2.92 4.562 1.553 1.169 2.457 1.82 2.457 2.764 0 .72-.464 1.213-1.275 1.213-.95 0-1.507-.877-1.365-2.405l-2.71.044c-.419 2.852.766 4.515 3.915 4.515 2.758 0 4.195-1.236 4.195-3.706-.003-2.247-1.16-3.147-3.664-4.944zM68.872 7.754h-3.059v13.77h3.06V7.755zM67.365 2.316c-1.18 0-1.738.427-1.738 1.911 0 1.528.554 1.909 1.739 1.909 1.205 0 1.738-.383 1.738-1.909 0-1.414-.533-1.911-1.739-1.911zM79.158 16.56l-2.803-.135c0 2.426-.277 3.212-1.226 3.212-.95 0-1.113-.877-1.113-3.73v-2.67c0-2.765.187-3.639 1.137-3.639.88 0 1.112.83 1.112 3.393l2.778-.178c.187-2.134-.093-3.595-.949-4.425-.627-.608-1.576-.897-2.896-.897-3.104 0-4.379 1.618-4.379 6.154v1.932c0 4.673 1.088 6.178 4.264 6.178 1.344 0 2.27-.27 2.896-.854.902-.814 1.249-2.205 1.18-4.341z"
        fill="#fff"
      />
    </svg>
  );
};

export const SearchIcon = ({ size, onClickFunc }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onClickFunc('')}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill="#909090"
      cursor="pointer"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  );
};

export const ConnectCastIcon = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 26 26"
      width={size}
      fill="#FFFFFF"
    >
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
      <path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z" />
    </svg>
  );
};

export const MoreVertIcon = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={color}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );
};

export const YTMusicIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={size}
      width={size}
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      fill="#ffffffB3"
    >
      <g>
        <path d="M16.94 6.9l-1.4 1.46C16.44 9.3 17 10.58 17 12s-.58 2.7-1.48 3.64l1.4 1.45C18.22 15.74 19 13.94 19 12s-.8-3.8-2.06-5.1zM23 12c0-3.12-1.23-5.95-3.23-8l-1.4 1.45C19.97 7.13 21 9.45 21 12s-1 4.9-2.64 6.55l1.4 1.45c2-2.04 3.24-4.87 3.24-8zM7.06 17.1l1.4-1.46C7.56 14.7 7 13.42 7 12s.6-2.7 1.5-3.64L7.08 6.9C5.78 8.2 5 10 5 12s.8 3.8 2.06 5.1zM1 12c0 3.12 1.23 5.95 3.23 8l1.4-1.45C4.03 16.87 3 14.55 3 12s1-4.9 2.64-6.55L4.24 4C2.24 6.04 1 8.87 1 12zm9-3.32v6.63l5-3.3-5-3.3z"></path>
      </g>
    </svg>
  );
};

export const FillLikeIcon = ({ size, className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      height={size}
      width={size}
      fill="#ffffff"
      className={className}
    >
      <g>
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
      </g>
    </svg>
  );
};

export const FillUnLikeIcon = ({ size, className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      height={size}
      width={size}
      className={className}
      fill="#ffffff"
    >
      <g>
        <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
      </g>
    </svg>
  );
};

export const UnFillLikeIcon = ({ size, className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      height={size}
      width={size}
      className={className}
      fill="#909090"
    >
      <g>
        <path d="M9 21h9c.8 0 1.5-.5 1.8-1.2l3-7.3c.1-.2.2-.4.2-.7V9.7c0-1.1-.9-2.1-2-2.1h-6.3l1-4.7v-.3c0-.4-.2-.8-.4-1.1-.6-.6-1.5-.5-2.1.1L7.6 7.3c-.4.4-.6.9-.6 1.4V19c0 1.1.9 2 2 2zm.3-12.6l3.5-3.6c.2-.2.5 0 .4.2l-1 4.7H20c.6 0 1 .5 1 1v1l-2.7 6.7c-.2.3-.6.6-1 .6H10c-.6 0-1-.5-1-1V9.2c0-.4.1-.6.3-.8zM5 21H1V9h4v12z"></path>
      </g>
    </svg>
  );
};

export const UnFillUnLikeIcon = ({ size, className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      height={size}
      width={size}
      className={className}
      fill="#909090"
    >
      <g>
        <path d="M14.9 3H6c-.8 0-1.5.5-1.8 1.2l-3 7.3c-.1.2-.2.4-.2.7v2c0 1.1.9 2 2 2h6.3l-1 4.7v.3c0 .4.2.8.4 1.1.6.7 1.5.7 2.1.1l5.5-5.7c.4-.4.6-.9.6-1.4V5c0-1.1-.9-2-2-2zm-.2 12.6l-3.5 3.6c-.2.2-.5 0-.4-.2l1-4.6H4c-.6 0-1-.5-1-1v-1.1l2.7-6.6c.2-.5.6-.7 1-.7H14c.5 0 1 .5 1 1v8.8c-.1.3-.2.6-.3.8zM19 3h4v12h-4V3z"></path>
      </g>
    </svg>
  );
};

export const YoutubePlayIcon = ({ size, color, className, onClickFunc }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      height={size}
      weight={size}
      fill={color}
      className={className}
      onClick={onClickFunc}
    >
      <g>
        <path d="M8 5v14l11-7z"></path>
      </g>
    </svg>
  );
};

export const BottomBarPrevIcon = ({ size, color, className, onClickFunc }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      height={size}
      width={size}
      fill={color}
      className={className}
      onClick={onClickFunc}
    >
      <g>
        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path>
      </g>
    </svg>
  );
};

export const BottomBarNextIcon = ({ size, color, className, onClickFunc }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      height={size}
      width={size}
      fill={color}
      className={className}
      onClick={onClickFunc}
    >
      <g>
        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path>
      </g>
    </svg>
  );
};

export const YoutubeStopIcon = ({ size, color, className, onClickFunc }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      height={size}
      weight={size}
      fill={color}
      className={className}
      onClick={onClickFunc}
    >
      <g>
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
      </g>
    </svg>
  );
};

export const MusicSoundIcon = ({ size, color, className, onClickFunc }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      height={size}
      weight={size}
      fill={color}
      className={className}
      onClick={onClickFunc}
    >
      <g>
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path>
      </g>
    </svg>
  );
};

export const RepeatIcon = ({ size, color, className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      height={size}
      weight={size}
      fill={color}
      className={className}
    >
      <g>
        <path d="M3 6.929c0-.75.643-1.393 1.393-1.393h14.286L16.32 3.179 17.5 2l4.393 4.393-4.393 4.393-1.179-1.179L18.68 7.25H4.714V11H3V6.929zM2.107 17.607L6.5 13.214l1.179 1.179L5.32 16.75l13.965-.071v-3.965H21V17c0 .75-.643 1.393-1.393 1.393l-14.286.071 2.358 2.357L6.5 22l-4.393-4.393z"></path>
      </g>
    </svg>
  );
};

export const MusicSoundMuteIcon = ({ size, color, className, onClickFunc }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      height={size}
      weight={size}
      fill={color}
      className={className}
      onClick={onClickFunc}
    >
      <g>
        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path>
      </g>
    </svg>
  );
};

export const RepeatOneIcon = ({ size, color, className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      height={size}
      weight={size}
      fill={color}
      className={className}
    >
      <g>
        <path d="M4.393 5.536C3.643 5.536 3 6.179 3 6.929V11h1.714V7.25H18.68L16.32 9.607l1.179 1.179 4.393-4.393L17.5 2l-1.179 1.179 2.358 2.357H4.393zM6.5 13.214l-4.393 4.393L6.5 22l1.179-1.179-2.358-2.357 14.286-.071c.75 0 1.393-.643 1.393-1.393v-4.286h-1.714v3.965L5.32 16.75l2.358-2.357L6.5 13.214z"></path>
        <path d="M13 9v6h-1.5v-4H10v-1l2-1h1z"></path>
      </g>
    </svg>
  );
};

export const ShuffleIcon = ({ size, color, className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      height={size}
      weight={size}
      fill={color}
      className={className}
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.808 4.655l2.069 1.978h-.527c-1.656 0-3.312.68-4.458 1.814L12.797 9.75l1.179 1.246 1.317-1.527c.764-.794 1.91-1.247 3.057-1.247h.55l-2.07 2.014 1.178 1.179 4.005-3.993-4.026-3.945-1.178 1.179zm1.974 10.998l-1.974-1.888 1.18-1.179 4.024 3.945-4.004 3.993-1.178-1.179 1.954-1.901h-.434c-1.656 0-3.312-.625-4.458-1.667L8.242 9.8C7.35 9.071 6.204 8.55 4.93 8.55H2l.006-1.794 2.965.003c1.784 0 3.312.521 4.459 1.563l5.904 6.185c.765.73 1.911 1.146 3.058 1.146h.39zm-9.02-2.092l-1.52 1.394c-.892.793-2.038 1.36-3.312 1.36H2v1.588h2.93c1.783 0 3.312-.567 4.459-1.701l1.537-1.396-1.164-1.245z"
        ></path>
      </g>
    </svg>
  );
};

export const TopDirectionIcon = ({ size, color, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={color}
      className={className}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7 14l5-5 5 5H7z" />
    </svg>
  );
};

export const BottomDirectionIcon = ({ size, color, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={color}
      className={className}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7 10l5 5 5-5H7z" />
    </svg>
  );
};
