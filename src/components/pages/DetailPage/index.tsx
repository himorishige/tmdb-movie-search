import { useState, useRef, useCallback, memo } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Layout } from 'src/components/templates';
import { StatusMessage } from 'src/components/molecules';
import { FavoriteButton, LoadingSpinner } from 'src/components/atoms';
import { Table, Thead, Tbody, Tr, Th, Td, Heading, Box, Flex, Image } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { toggleFavoritesList, selectFavoritesIds } from 'src/features/user/userSlice';
import { useFetchMovieByIdQuery } from 'src/features/movie/movieQuery';
import { useToastMessage } from 'src/hooks/useToastMessage';
import { useHelper } from 'src/hooks/useHelper';
import { Helmet } from 'react-helmet-async';
import { IMAGE_BASE_URL, SITE_NAME } from 'src/constants';
import { AlertDialogBox } from 'src/components/organisms';

export type Props = Partial<RouteComponentProps> & {
  match: {
    params: {
      id: string;
    };
  };
};

const DetailPage: React.VFC<Props> = memo((props) => {
  const movieId = Number(props.match?.params?.id) || 588228;
  const { data, error, isLoading } = useFetchMovieByIdQuery(movieId);
  const { formatLocalDate } = useHelper();

  const dispatch = useAppDispatch();
  const ids = useAppSelector(selectFavoritesIds);
  const { showMessage } = useToastMessage();

  // お気に入りの削除アラート制御
  const [isOpen, setIsOpen] = useState(false);
  const onClose = useCallback(() => setIsOpen(false), []);
  const cancelRef = useRef().current;

  // お気に入りボタンのトグル制御
  const toggleHandler = useCallback(() => {
    if (!data) return;

    if (ids.includes(data.id)) {
      setIsOpen(true);
    } else {
      dispatch(toggleFavoritesList(data));
      showMessage({ title: 'お気に入りリストに登録しました。', status: 'success' });
    }
  }, [data, dispatch, ids, showMessage]);

  // お気に入りリストから削除する制御
  const removeHandler = useCallback(() => {
    if (!data) return;

    dispatch(toggleFavoritesList(data));
    setIsOpen(false);
    showMessage({ title: 'リストから削除しました。', status: 'success' });
  }, [data, dispatch, showMessage]);

  return (
    <Layout>
      {error ? (
        <StatusMessage status="error">詳細データの取得に失敗しました。</StatusMessage>
      ) : isLoading ? (
        <LoadingSpinner />
      ) : data ? (
        <Box>
          <Helmet>
            <title>
              {data.title} | {SITE_NAME}
            </title>
          </Helmet>
          <Heading mb="2rem" size="lg">
            {data.title}
          </Heading>
          <Flex direction={{ base: 'column', md: 'row' }}>
            <Box textAlign="center" position="relative">
              <Flex
                position="absolute"
                bottom="0"
                right={{ base: '15%', md: '0' }}
                bgColor="whiteAlpha.500"
                w={20}
                h={20}
                clipPath="polygon(0 100%, 100% 0, 100% 100%)"
                alignItems="flex-end"
                justifyContent="flex-end"
                p={1}
              >
                <FavoriteButton
                  favoriteFlag={ids.includes(data.id)}
                  toggleHandler={toggleHandler}
                  size="2rem"
                />
              </Flex>
              <Image
                src={`${IMAGE_BASE_URL}${data.poster_path}`}
                fallbackSrc="/assets/no-image.jpg"
                alt={data.title}
                borderRadius={8}
                width={{ base: '70%', md: '100%' }}
                mx="auto"
              />
            </Box>
            <Box w={{ base: '100%', md: '80%' }} pl={{ base: '0', md: '2rem' }}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th w="120px"></Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td fontWeight="bold">公開</Td>
                    <Td>{formatLocalDate(data.release_date)}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">ジャンル</Td>
                    <Td>{data.genres.map((item) => item.name).join(',')}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">概要</Td>
                    <Td>{data.overview}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">原題</Td>
                    <Td>{data.original_title}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Flex>
          {/* 削除確認用のアラート表示 */}
          <AlertDialogBox
            title={data.title}
            isOpen={isOpen}
            cancelRef={cancelRef}
            onClose={onClose}
            removeHandler={removeHandler}
          />
        </Box>
      ) : (
        <StatusMessage status="error">詳細データが見つかりませんでした。</StatusMessage>
      )}
    </Layout>
  );
});

export default DetailPage;
