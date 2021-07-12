import { useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Heading } from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from 'src/app/hooks';
import {
  fetchSearchResults,
  selectError,
  selectLoading,
  selectSearchResults,
} from 'src/features/user/userSlice';
import { Layout } from 'src/components/templates';
import { SearchList } from 'src/components/organisms';
import { StatusMessage } from 'src/components/molecules';
import { LoadingSpinner } from 'src/components/atoms';
import { SITE_NAME } from 'src/constants';

const SearchPage: React.VFC = memo(() => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(selectSearchResults);
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const keyword = query.get('keyword') || '';
  const page = Number(query.get('page')) || 1;

  // 直接リンクページ遷移、またはリロードした際の新規読み込み用
  useEffect(() => {
    if (!data) {
      dispatch(fetchSearchResults({ keyword: keyword, page: page }));
    }
  }, [data, dispatch, keyword, page]);

  return (
    <Layout>
      <Box>
        <Helmet>
          <title>
            {keyword}の検索結果 | {SITE_NAME}
          </title>
        </Helmet>
        <Heading mb="2rem" size="lg">
          {keyword}の検索結果
        </Heading>
        {error ? (
          <StatusMessage status="error">{error}</StatusMessage>
        ) : isLoading ? (
          <LoadingSpinner />
        ) : data?.results.length ? (
          <SearchList results={data?.results} />
        ) : (
          <StatusMessage status="error">該当する結果が見つかりませんでした。</StatusMessage>
        )}
      </Box>
    </Layout>
  );
});

export default SearchPage;
