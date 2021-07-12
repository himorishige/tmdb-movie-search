import { useCallback, useState, memo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { fetchSearchResults, selectLoading } from 'src/features/user/userSlice';
import { useToastMessage } from 'src/hooks/useToastMessage';
import { SearchParams } from 'src/types';

const SearchArea: React.VFC = memo(() => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectLoading);
  const history = useHistory();
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const [keyword, setKeyword] = useState(query.get('keyword') || '');
  const { showMessage } = useToastMessage();

  // Form制御
  const { register, handleSubmit } = useForm<SearchParams>();

  // 検索用ハンドラー
  const submitHandler: SubmitHandler<SearchParams> = useCallback(
    (data) => {
      // キーワードが未入力の場合
      if (!data.keyword) {
        showMessage({
          title: '検索キーワードを入力してください。',
          status: 'error',
        });
        return;
      }
      // キーワードが入力されている場合
      setKeyword(data.keyword);
      dispatch(fetchSearchResults({ keyword: data.keyword, page: 1 }));
      history.push(`/search?keyword=${data.keyword}&page=${1}`);
    },
    [dispatch, history, showMessage],
  );

  return (
    <Box>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Flex>
          <Input
            {...register('keyword')}
            disabled={isLoading}
            defaultValue={keyword}
            bgColor="white"
            enterKeyHint="search"
            data-testid="input"
          />
          <Button type="submit" ml="1rem" colorScheme="blue" disabled={isLoading}>
            検索
          </Button>
        </Flex>
      </form>
    </Box>
  );
});

export default SearchArea;
