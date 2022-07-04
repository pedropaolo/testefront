import { AppProps } from 'next/app';
import { Dashboard } from '../components/Dashboard';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'



function MyApp({ Component, pageProps } : AppProps) {
  return(
    <>
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
      <Dashboard />
    </ChakraProvider>
    </>
    
  )
  
}

export default MyApp
