import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Header from '../../components/Header';
import LibraryComponent from '../../components/LibraryComponent';

export default function PlayLists() {
  return (
    <Box className="bg-black text-white">
      <Head>
        <title>Youtube Music</title>
        <meta name="description" content="Youtube Music" />
        <link rel="icon" href="/ym.png" />
      </Head>
      <Header />
      <LibraryComponent />
    </Box>
  );
}
