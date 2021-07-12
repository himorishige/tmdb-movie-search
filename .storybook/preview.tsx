import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { store } from '../src/app/store';
import { Provider } from 'react-redux';
import { Story } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (StoryFn: Story) => (
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <ChakraProvider>
            <StoryFn />
          </ChakraProvider>
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  ),
];
