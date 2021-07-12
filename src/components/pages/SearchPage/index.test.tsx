import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from 'src/app/store';
import { Provider } from 'react-redux';
import SearchPage from '.';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

afterEach(() => {
  cleanup();
});

// const sleep = (value: number) => new Promise((resolve) => setTimeout(resolve, value));

describe('Integration Test/MyPage', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <ChakraProvider>
              <SearchPage />
            </ChakraProvider>
          </BrowserRouter>
        </HelmetProvider>
      </Provider>,
    );
  });
  test('初回閲覧時にはお気に入りリストボタンはグレーでカウントは非表示になっている', () => {
    expect(screen.getByTestId('heart-icon')).toHaveStyle('color: var(--chakra-colors-gray-400)');
    expect(screen.queryByTestId('favorites-count')).toBeNull();
  });
  test('直接アクセスした場合にエラーメッセージが表示される', async () => {
    userEvent.click(screen.getByText('検索'));
    expect(await screen.findByText('検索結果の取得に失敗しました。')).toBeInTheDocument();
  });
  test('キーワード「バットマン」で検索ボタンを押した場合にバットマンの検索結果が表示される', async () => {
    fireEvent.input(screen.getByTestId('input'), {
      target: { value: 'バットマン' },
    });
    fireEvent.submit(await screen.findByText('検索'));
    expect(await screen.findByTestId('input')).toHaveValue('バットマン');
    // WIP
  });
});
