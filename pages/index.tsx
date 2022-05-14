import type { NextPage } from 'next'
import React from 'react'
import NavBar from '../components/Navbar';
import { Stack, Center, Heading, Container, Text } from '@chakra-ui/react'
import Generate from '../components/Generateloadstring';
import Head from 'next/head';

const Home: NextPage = () => { {
  return (
   <>
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
