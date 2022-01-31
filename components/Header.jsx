import React, { useEffect, useMemo, useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { SearchIcon, ArrowBackIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from '../src/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../store/headerSlice';

function Header() {
  const headerValue = useSelector((state) => state.header.value);
  const dispatch = useDispatch();

  const [searchInputState, setSearchInputState] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [navbar, setNavbar] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const headerList = ['/', '/explore', '/library/playlists'];

    headerList.forEach((listItem) => {
      if (listItem == router.asPath) {
        console.log(listItem);
        console.log(router.asPath);
        dispatch(changeValue(router.asPath));
      }
    });

    const changeBackground = () => {
      if (window.scrollY >= 1) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, [setNavbar, dispatch, router]);

  return (
    <Flex
      justify="space-between"
      py="8px"
      px="15px"
      h="64px"
      align="center"
      className={
        navbar
          ? 'border-[#1d1d1d] border-b-[1px] z-50 w-full bg-black fixed'
          : 'fixed w-full z-50'
      }
    >
      <Icon name="youtubeMusic" height={24} width={80} />
      {searchInputState ? (
        <Flex>
          <InputGroup size="md" bgColor="#212121" w="862px" h="50px">
            <InputLeftElement
              w="50px"
              h="50px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Flex justify="center" align="center" w="full" h="full">
                <ArrowBackIcon
                  color="#909090"
                  w="23px"
                  h="23px"
                  bgColor="#212121"
                  onClick={() => setSearchInputState(false)}
                  cursor="pointer"
                />
              </Flex>
            </InputLeftElement>
            <Input
              pl="3.5rem"
              type={'text'}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              borderColor="#333"
              w="862px"
              _hover={{ ring: '0px' }}
              _focus={{ ring: '0px' }}
              h="50px"
              _placeholder={{
                color: '#909090',
                fontWeight: 'bold',
                fontSize: 'xl',
              }}
            />
            {searchValue !== '' && (
              <InputRightElement
                w="50px"
                h="50px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Flex justify="center" align="center" w="full" h="full">
                  <Icon name="search" size={23} onClickFunc={setSearchValue} />
                </Flex>
              </InputRightElement>
            )}
          </InputGroup>
        </Flex>
      ) : (
        <Flex justify="center" align="center">
          <Link href="/" passHref>
            <Heading
              size="md"
              mr="10"
              opacity={headerValue === '/' ? '1.0' : '0.5'}
              onClick={() => dispatch(changeValue('/'))}
              _hover={{ opacity: '1.0' }}
              cursor="pointer"
            >
              Home
            </Heading>
          </Link>
          <Link href="/explore" passHref>
            <Heading
              size="md"
              mr="10"
              opacity={headerValue === '/explore' ? '1.0' : '0.5'}
              onClick={() => dispatch(changeValue('/explore'))}
              _hover={{ opacity: '1.0' }}
              cursor="pointer"
            >
              Explore
            </Heading>
          </Link>
          <Link href="/library/playlists" passHref>
            <Heading
              size="md"
              mr="10"
              opacity={headerValue === '/library/playlists' ? '1.0' : '0.5'}
              onClick={() => dispatch(changeValue('/library/playlists'))}
              _hover={{ opacity: '1.0' }}
              cursor="pointer"
            >
              Library
            </Heading>
          </Link>
          <Flex
            justify="center"
            align="center"
            opacity="0.5"
            onClick={() => setSearchInputState(true)}
            _hover={{ opacity: '1.0' }}
            cursor="pointer"
          >
            <SearchIcon w="17px" h="17px" mr="3" />
            <Heading size="md" mr="12">
              Search
            </Heading>
          </Flex>
        </Flex>
      )}
      <Flex align="center">
        <Icon name="connectCast" size={23} />
        <Flex
          justify="center"
          align="center"
          borderRadius="full"
          bgColor="cyan.800"
          h="27px"
          ml="7"
          w="27px"
        >
          <Text fontSize="sm">K</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;
