import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import myTheme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
    usePanelbear('AEulGRejzMP');
  return ( 
    <ChakraProvider theme={myTheme}>
  <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
