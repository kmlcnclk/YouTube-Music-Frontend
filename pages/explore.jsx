import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import ExploreComponent from '../components/ExploreComponent';

export default function Explore() {
  return (
    <Box className="bg-black text-white">
      <Head>
        <title>Youtube Music</title>
        <meta name="description" content="Youtube Music" />
        <link rel="icon" href="/ym.png" />
      </Head>
      <Header />
      <ExploreComponent />
    </Box>
  );
}
