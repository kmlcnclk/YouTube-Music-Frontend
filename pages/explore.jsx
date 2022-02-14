import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
// import ExploreComponent from '../components/ExploreComponent';
import { useEffect, useRef, useState } from 'react';
import unfetch from 'isomorphic-unfetch';
import { useSelector } from 'react-redux';

function Explore({ dt, dtMood, dtGenre }) {
  const [prev1, setPrev1] = useState(false);
  const [next1, setNext1] = useState(false);
  const [prev2, setPrev2] = useState(false);
  const [next2, setNext2] = useState(false);
  const [prev3, setPrev3] = useState(false);
  const [next3, setNext3] = useState(false);
  const [prev4, setPrev4] = useState(false);
  const [next4, setNext4] = useState(false);
  const [albumsAndSingles, setAlbumsAndSingles] = useState({});
  const [moodsAndGenres, setMoodsAndGenres] = useState([]);

  const musicPlay = useSelector((state) => state.musicPlay.value);
  const musicID = useSelector((state) => state.musicID.value);

  const albumsAndSinglesRef = useRef();
  const topSongsRef = useRef();
  const moodsAndGenresRef = useRef();
  const trendingRef = useRef();

  useEffect(() => {
    if (dt) {
      setAlbumsAndSingles(dt);
    }

    if (dtMood.success && dtGenre.success) {
      setMoodsAndGenres([...dtMood.data, ...dtGenre.data]);
    }
  }, [setAlbumsAndSingles, dt, dtGenre, dtMood, setMoodsAndGenres]);

  return (
    <Box className="bg-black text-white">
      <Head>
        <title>Youtube Music</title>
        <meta name="description" content="Youtube Music" />
        <link rel="icon" href="/ym.png" />
      </Head>
      <Header />
      {/* {albumsAndSingles && albumsAndSingles.success && moodsAndGenres[0] ? (
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
            prev3,
            setPrev3,
            next3,
            setNext3,
            prev4,
            setPrev4,
            next4,
            setNext4,
            moodsAndGenresRef,
            moodsAndGenres,
            trendingRef,
          }}
        />
      ) : null} */}
    </Box>
  );
}

Explore.getInitialProps = async (ctx) => {
  const resAlbumAndSingle = await unfetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/explore/exploreNewAlbumsAndSinglesGet`
  );

  const dataAlbumAndSingle = await resAlbumAndSingle.json();

  const resMood = await unfetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/mood/all`
  );

  const dtMood = await resMood.json();

  const resGenre = await unfetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/genre/all`
  );

  const dtGenre = await resGenre.json();

  return {
    dt: dataAlbumAndSingle,
    dtMood,
    dtGenre,
  };
};

export default Explore;
