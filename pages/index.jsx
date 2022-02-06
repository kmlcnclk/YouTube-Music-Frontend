import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import HomeComponent from '../components/Home/HomeComponent';
import useSWR from 'swr';
import unFetch from 'isomorphic-unfetch';
import { useSelector, useDispatch } from 'react-redux';
import BottomBar from '../components/tools/BottomBar';

export default function Home({ dt }) {
  const bottomBar = useSelector((state) => state.bottomBar.value);
  const musicPlay = useSelector((state) => state.musicPlay.value);
  const currentMusicList = useSelector((state) => state.currentMusic.musics);
  const musicID = useSelector((state) => state.musicID.value);
  const dispatch = useDispatch();

  const mix = useRef();
  const pick = useRef();

  const [prev1, setPrev1] = useState(false);
  const [next1, setNext1] = useState(false);
  const [prev2, setPrev2] = useState(false);
  const [next2, setNext2] = useState(false);
  const [mixeds, setMixeds] = useState({});

  const { data } = useSWR(
    [`${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/mixed`, 'GET'],
    {
      fallbackData: dt,
    }
  );

  useEffect(() => {
    if (data) {
      setMixeds(data);
    }
  }, [setMixeds, data]);

  return (
    <Box className="bg-black text-white overflow-x-hidden">
      <Head>
        <title>Youtube Music</title>
        <meta name="description" content="Youtube Music" />
        <link rel="icon" href="/ym.png" />
      </Head>
      <Header />
      {mixeds && mixeds.success ? (
        <HomeComponent
          {...{
            mix,
            prev1,
            next1,
            mixeds,
            setPrev1,
            setNext1,
            prev2,
            next2,
            setPrev2,
            setNext2,
            pick,
            bottomBar,
            dispatch,
            musicPlay,
            musicID,
          }}
        />
      ) : null}
      {bottomBar && currentMusicList[0] ? <BottomBar /> : null}
    </Box>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await unFetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/homePage/mixed`
  );

  const dt = await res.json();

  return { dt };
};
