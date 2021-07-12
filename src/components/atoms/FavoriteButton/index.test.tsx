import renderer from 'react-test-renderer';
import FavoriteButton, { Props } from '.';

describe('Atoms/FavoriteButton', () => {
  test('正しくレンダリングされている', () => {
    const props: Props = {
      favoriteFlag: true,
      toggleHandler: jest.fn(),
    };
    const button = renderer.create(<FavoriteButton {...props} />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
