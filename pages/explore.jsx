import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import ExploreComponent from '../components/ExploreComponent';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import unfetch from 'isomorphic-unfetch';
import { useSelector } from 'react-redux';

function Explore({ dt }) {
  const [prev1, setPrev1] = useState(false);
  const [next1, setNext1] = useState(false);
  const [prev2, setPrev2] = useState(false);
  const [next2, setNext2] = useState(false);
  const [albumsAndSingles, setAlbumsAndSingles] = useState({});

  const musicPlay = useSelector((state) => state.musicPlay.value);
  const musicID = useSelector((state) => state.musicID.value);

  const albumsAndSinglesRef = useRef();
  const topSongsRef = useRef();

  const { data } = useSWR(
    [
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/explore/exploreNewAlbumsAndSinglesGet`,
      'GET',
    ],
    {
      fallbackData: dt,
    }
  );

  useEffect(() => {
    if (data) {
      setAlbumsAndSingles(data);
    }
  }, [setAlbumsAndSingles, data]);

  return (
    <Box className="bg-black text-white">
      <Head>
        <title>Youtube Music</title>
        <meta name="description" content="Youtube Music" />
        <link rel="icon" href="/ym.png" />
      </Head>
      <Header />
      {albumsAndSingles && albumsAndSingles.success ? (
        <ExploreComponent
          {...{
            prev1,
            next1,
            setPrev1,
            setNext1,
            albumsAndSinglesRef,
            albumsAndSingles,
            musicID,
            musicPlay,
            prev2,
            next2,
            setPrev2,
            setNext2,
            topSongsRef,
          }}
        />
      ) : null}
    </Box>
  );
}

Explore.getInitialProps = async (ctx) => {
  const res = await unfetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/explore/exploreNewAlbumsAndSinglesGet`
  );

  const dt = await res.json();

  return { dt };
};

export default Explore;
