import renderer from 'react-test-renderer';
import Footer from '.';

describe('Organisms/Footer', () => {
  test('正しくレンダリングされている', () => {
    const footer = renderer.create(<Footer />).toJSON();
    expect(footer).toMatchSnapshot();
  });
});
