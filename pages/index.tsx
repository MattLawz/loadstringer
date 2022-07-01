import type { NextPage } from 'next'
import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import { Stack, Center, Heading, Container, Text, Input} from '@chakra-ui/react'
import Head from 'next/head';
import Script from 'next/script';
import Generate from '../components/Generateloadstring';

const Home: NextPage = () => { {
    const [url, setUrl] = useState('');
    return (
   <>
   <Script data-cfasync="false" src="//d27genukseznht.cloudfront.net/?unegd=961253" />
    <Head>
        <title>Loadstringer</title>
        <link rel="icon" href="./logo.gif" />
        <meta name="description" content="Loadstringer is a utility that will automatically put your RAW script into a loadstring." />
        <meta name="theme-color" content="#90cdf4" />
    </Head>
    <NavBar />
    <Container minW='container.sm'>
                <Stack spacing={5}>
                    <Center>
                    <Heading as='h2' size='xl'>Loadstringer</Heading>
                    </Center>
                    <Center>
                    <Text fontSize='xl'>Utility that will automatically put your RAW script into a loadstring</Text>
                    </Center>
                    <Generate />
                </Stack>
            </Container>
   </>
  )
}
}

export default Home
