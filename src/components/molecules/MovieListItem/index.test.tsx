import renderer from 'react-test-renderer';
import MovieListItem, { Props } from '.';
import { store } from 'src/app/store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

describe('Molecules/MovieListItem', () => {
  test('正しくレンダリングされている', () => {
    const props: Props = {
      data: {
        adult: false,
        backdrop_path: '/nVKRspU9SQEs2gNrms8cDKsI4vx.jpg',
        genre_ids: [28, 878, 12, 10752],
        id: 588228,
        original_language: 'en',
        original_title: 'The Tomorrow War',
        overview: '',
        poster_path: '/xipF6XqfSYV8DxLqfLN6aWlwuRp.jpg',
        release_date: '2021-06-30',
        title: 'トゥモロー･ウォー',
        video: false,
        vote_average: 8.7,
        vote_count: 695,
        popularity: 771.266,
      },
    };
    const element = renderer
      .create(
        <HelmetProvider>
          <Provider store={store}>
            <ChakraProvider>
              <BrowserRouter>
                <MovieListItem {...props} />
              </BrowserRouter>
            </ChakraProvider>
          </Provider>
        </HelmetProvider>,
      )
      .toJSON();
    expect(element).toMatchSnapshot();
  });
});
