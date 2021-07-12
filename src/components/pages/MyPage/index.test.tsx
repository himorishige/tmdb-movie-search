import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import MyPage from '.';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'src/features/user/userSlice';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

afterEach(() => {
  cleanup();
});

describe('Integration Test/MyPage', () => {
  let store: any;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        user: userReducer,
      },
    });
    render(
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <ChakraProvider>
              <MyPage />
            </ChakraProvider>
          </BrowserRouter>
        </HelmetProvider>
      </Provider>,
    );
  });
  test('お気に入りリストが空の時にメッセージが表示される', () => {
    expect(screen.getByText('登録されているお気に入りはありません。')).toBeInTheDocument();
  });
});
