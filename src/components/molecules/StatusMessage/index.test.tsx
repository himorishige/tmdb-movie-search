import renderer from 'react-test-renderer';
import StatusMessage, { Props } from '.';

describe('Atoms/StatusMessage', () => {
  test('正しくレンダリングされている', () => {
    const props: Props = {
      status: 'error',
      children: 'message',
    };
    const element = renderer.create(<StatusMessage {...props} />).toJSON();
    expect(element).toMatchSnapshot();
  });
});
