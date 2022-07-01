import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import NavBar from '../components/Navbar';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Stack, Center, Heading, Box, Container } from '@chakra-ui/react'
import Link from 'next/link'
import Script from 'next/script';
const FAQ: NextPage = () => { {
  return (
   <>
      <Script data-cfasync="false" src="//d27genukseznht.cloudfront.net/?unegd=961253" />
    <Head>
        <title>FAQ | Loadstringer</title>
        <link rel="icon" href="./logo.gif" />
        <meta name="description" content="Loadstringer is a utility that will automatically put your RAW script into a loadstring." />
        <meta name="theme-color" content="#90cdf4" />
    </Head>
    <NavBar />
    <Container minW='container.sm'>
                <Stack spacing={5}>
                    <Center>
                    <Heading as='h2' size='xl'>F.A.Q.</Heading>
                    </Center>
                    <Accordion>
  <AccordionItem>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          What is this?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>
      This is a tool that allows you to automatically put your RAW script into a loadstring. This is useful for when you want to make a loadstring but don&apos; want to go hunting for the format.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Is this tool free?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>
      Yes! This tool is completely free. Feel free to share it with your friends!
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          How do I use the old versions?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>
      The old versions have been completely discontinued as there is no need for them. We hope this improved version will satisfy your uses.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          What technologies does this tool use?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>
      At the moment we are using NextJs, Typescript, ChakraUI, and a clipboard library.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          No advertisements?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>
      For the time being we are not using any advertisements. If you want to make a donation please feel free to do so by contacting me on Discord.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Who owns / maintains this?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    <AccordionPanel pb={4}>
      <Link href="https://mattlawz.dev" passHref><a target="_blank">MattLawz</a></Link>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

                </Stack>
            </Container>

   </>
  )
}
}

export default FAQ
