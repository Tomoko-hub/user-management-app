import React from 'react';
import { Button, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import theme from './theme/thema';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Button colorScheme='teal'>button</Button>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
