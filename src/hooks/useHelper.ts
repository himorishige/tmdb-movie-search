import { format } from 'date-fns';
import { useCallback } from 'react';

export const useHelper = () => {
  // yyyy-mm-ddのstringをyyyy年MM月dd日のフォーマットに変換する
  const formatLocalDate = useCallback((date: string | null) => {
    if (date) {
      const target = new Date(date);
      return format(target, 'yyyy年MM月dd日');
    }
    return null;
  }, []);

  return { formatLocalDate };
};
