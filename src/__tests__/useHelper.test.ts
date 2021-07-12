import { renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';
import { useHelper } from 'src/hooks/useHelper';

afterEach(() => cleanup());

describe('useHelper/formatLocalDate', () => {
  test('文字列「2021-7-3」を渡すとyyyy年MM月dd日型に変換される', () => {
    const { result } = renderHook(() => useHelper());
    expect(result.current.formatLocalDate('2021-7-3')).toBe('2021年07月03日');
  });
  test('文字列がNullの場合Nullを返す', () => {
    const { result } = renderHook(() => useHelper());
    expect(result.current.formatLocalDate(null)).toBeNull();
  });
});
