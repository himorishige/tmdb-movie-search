import { memo } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { LoadingSpinner } from 'src/components/atoms';
import { StatusMessage } from 'src/components/molecules';
import { SearchList } from 'src/components/organisms';
import { Layout } from 'src/components/templates';
import { SITE_NAME } from 'src/constants';
import { useFetchPopularMoviesQuery } from 'src/features/movie/movieQuery';

const Page404: React.VFC = memo(() => {
  const { data, error, isLoading } = useFetchPopularMoviesQuery();

  return (
    <Layout>
      <Box>
        <Helmet>
          <title>ページが見つかりませんでした | {SITE_NAME}</title>
        </Helmet>
        <Box mt="1rem" mb="3rem">
          <StatusMessage status="error">
            404 Page Not Found お探しのページが見つかりませんでした。
          </StatusMessage>
        </Box>
        <Heading mb="2rem" size="lg">
          人気の映画
        </Heading>
        {error ? (
          <StatusMessage status="error">一覧の取得に失敗しました。</StatusMessage>
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

export default Page404;
