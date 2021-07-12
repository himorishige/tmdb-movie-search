import renderer from 'react-test-renderer';
import LoadingSpinner from '.';

describe('Atoms/LoadingSpinner', () => {
  test('正しくレンダリングされている', () => {
    const spinner = renderer.create(<LoadingSpinner />).toJSON();
    expect(spinner).toMatchSnapshot();
  });
});
