import { memo } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Layout } from 'src/components/templates';
import { SearchList } from 'src/components/organisms';
import { StatusMessage } from 'src/components/molecules';
import { LoadingSpinner } from 'src/components/atoms';
import { useFetchPopularMoviesQuery } from 'src/features/movie/movieQuery';
import { Helmet } from 'react-helmet-async';
import { SITE_NAME } from 'src/constants';

const HomePage: React.VFC = memo(() => {
  const { data, error, isLoading } = useFetchPopularMoviesQuery();

  return (
    <Layout>
      <Helmet>
        <title>注目の映画一覧 | {SITE_NAME}</title>
      </Helmet>
      <Box>
        <Heading mb="2rem" size="lg">
          注目の映画一覧
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

export default HomePage;
