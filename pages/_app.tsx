import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { usePanelbear } from '@panelbear/panelbear-nextjs';

function MyApp({ Component, pageProps }: AppProps) {
    usePanelbear('AEulGRejzMP');
  return ( 
    <ChakraProvider>
  <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
