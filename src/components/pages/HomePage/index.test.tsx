import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from 'src/app/store';
import { Provider } from 'react-redux';
import HomePage from '.';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

afterEach(() => {
  cleanup();
});

describe('Integration Test/MyPage', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <ChakraProvider>
              <HomePage />
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
  test('キーワードが空の状態で検索ボタンを押した場合にエラーメッセージが表示される', async () => {
    userEvent.click(screen.getByText('検索'));
    expect(await screen.findByText('検索キーワードを入力してください。')).toBeInTheDocument();
  });
  test('お気に入りボタンを2種類押すとお気に入りリストボタンのカウントが2になる', async () => {
    userEvent.click((await screen.findAllByTestId('add-favorites-button'))[0]);
    userEvent.click((await screen.findAllByTestId('add-favorites-button'))[1]);
    expect(await screen.findByTestId('favorites-count')).toHaveTextContent('2');
  });
});
