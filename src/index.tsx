
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import App from "./App"
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './Theme'


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>

  <ChakraProvider theme={theme}>
  <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

