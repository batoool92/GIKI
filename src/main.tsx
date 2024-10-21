/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { ModalUserProvider } from './Components/ModalContext/ModalContext'
import App from './App.tsx'
import './index.css'

const colors = {
  brand: {
    blueish: '#434E61',
    yellow: '#FF8C1E'
  }
}

const Theme = extendTheme({ colors })

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <BrowserRouter basename='/GIKI'>
      <ChakraProvider theme={Theme}>
        <ModalUserProvider>
          <App />
        </ModalUserProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
