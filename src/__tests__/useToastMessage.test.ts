import { renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';
import { useToastMessage, Props } from 'src/hooks/useToastMessage';

afterEach(() => cleanup());

describe('useToastMessage/showMessage', () => {
  test('showMessageが実行される', () => {
    const { result } = renderHook(() => useToastMessage());
    const message: Props = { title: 'test', status: 'info' };
    expect(result.current.showMessage(message)).toBe(undefined);
  });
});
