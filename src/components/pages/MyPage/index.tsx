import { memo } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useAppSelector } from 'src/app/hooks';
import { selectFavoritesList } from 'src/features/user/userSlice';
import { Layout } from 'src/components/templates';
import { SearchList } from 'src/components/organisms';
import { StatusMessage } from 'src/components/molecules';
import { Helmet } from 'react-helmet-async';
import { SITE_NAME } from 'src/constants';

const MyPage: React.VFC = memo(() => {
  const data = useAppSelector(selectFavoritesList);

  return (
    <Layout>
      <Helmet>
        <title>お気に入り一覧 | {SITE_NAME}</title>
      </Helmet>
      <Box>
        <Heading mb="2rem" size="lg">
          お気に入り一覧
        </Heading>
        {data.length ? (
          <SearchList results={data} />
        ) : (
          <StatusMessage status="warning">登録されているお気に入りはありません。</StatusMessage>
        )}
      </Box>
    </Layout>
  );
});

export default MyPage;
