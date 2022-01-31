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
    [`${process.env.BACKEND_URL}/homePage/mixed`, 'GET'],
    {
      fallbackData: dt,
    }
  );

  useEffect(() => {
    if (data) {
      setMixeds(data);
    }
  }, [setMixeds]);

  return (
    <Box className="bg-black text-white">
      <Head>
        <title>Youtube Music</title>
        <meta name="description" content="Youtube Music" />
        <link rel="icon" href="/ym.png" />
      </Head>
      <Header />
      {mixeds && mixeds.data && (
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
      )}
      {bottomBar ? <BottomBar /> : null}
    </Box>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await unFetch(`${process.env.BACKEND_URL}/homePage/mixed`);

  const dt = await res.json();

  return { dt };
};
