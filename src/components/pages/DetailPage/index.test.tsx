import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from 'src/app/store';
import { Provider } from 'react-redux';
import DetailPage from '.';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

afterEach(() => {
  cleanup();
});

const props = {
  match: {
    params: {
      id: '588228',
    },
  },
};

describe('Integration Test/MyPage', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <ChakraProvider>
              {/* @ts-ignore */}
              <DetailPage props={props} />
            </ChakraProvider>
          </BrowserRouter>
        </HelmetProvider>
      </Provider>,
    );
  });
  test('APIから取得したムービーID588228の詳細情報が表示される', async () => {
    expect(await screen.findByText('トゥモロー･ウォー')).toBeInTheDocument();
  });
});
