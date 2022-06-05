import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme, ColorModeScript, type ThemeConfig } from '@chakra-ui/react';

import App from './App';
import './index.css';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
  disableTransitionOnChange: false,
}

const theme = extendTheme({
  colors,
  config,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
