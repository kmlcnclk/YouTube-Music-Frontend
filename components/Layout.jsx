import React from 'react';
import Head from 'next/head';
import BottomBar from './tools/BottomBar';
import { useSelector } from 'react-redux';

const Layout = ({ className = '', title = 'Youtube Music', children }) => {
  const bottomBar = useSelector((state) => state.bottomBar.value);
  const currentMusicList = useSelector((state) => state.currentMusic.musics);

  return (
    <div className={className}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/ym.png" />
      </Head>
      {children}
      {bottomBar && currentMusicList[0] && <BottomBar />}
    </div>
  );
};

export default Layout;
