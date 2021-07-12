import renderer from 'react-test-renderer';
import SearchArea from '.';
import { store } from 'src/app/store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

describe('Organisms/SearchArea', () => {
  test('正しくレンダリングされている', () => {
    const header = renderer
      .create(
        <HelmetProvider>
          <Provider store={store}>
            <ChakraProvider>
              <BrowserRouter>
                <SearchArea />
              </BrowserRouter>
            </ChakraProvider>
          </Provider>
        </HelmetProvider>,
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});
