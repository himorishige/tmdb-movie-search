import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';

import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <HelmetProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </HelmetProvider>
    </Provider>,
  );

  expect(getByText(/TMDb/)).toBeInTheDocument();
});
