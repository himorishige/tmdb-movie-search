import { useState, useRef, memo, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, GridItem, Heading, Image, Text, Link } from '@chakra-ui/react';
import { DetailResponse, MovieData } from 'src/types';
import { IMAGE_BASE_URL } from 'src/constants';
import { useHelper } from 'src/hooks/useHelper';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { toggleFavoritesList, selectFavoritesIds } from 'src/features/user/userSlice';
import { useToastMessage } from 'src/hooks/useToastMessage';
import { FavoriteButton } from 'src/components/atoms';
import { AlertDialogBox } from 'src/components/organisms';

export type Props = {
  data: MovieData | DetailResponse;
};

const MovieListItem: React.VFC<Props> = memo(({ data }) => {
  const dispatch = useAppDispatch();
  const ids = useAppSelector(selectFavoritesIds);
  const favoriteFlag = ids.includes(data.id);
  const { formatLocalDate } = useHelper();
  const { showMessage } = useToastMessage();

  // お気に入りの削除アラート制御
  const [isOpen, setIsOpen] = useState(false);
  const onClose = useCallback(() => setIsOpen(false), []);
  const cancelRef = useRef().current;

  // お気に入りボタンのトグル制御
  const toggleHandler = useCallback(() => {
    if (favoriteFlag) {
      setIsOpen(true);
    } else {
      dispatch(toggleFavoritesList(data));
      showMessage({ title: 'お気に入りリストに登録しました。', status: 'success' });
    }
  }, [data, dispatch, favoriteFlag, showMessage]);

  // お気に入りリストから削除する制御
  const removeHandler = useCallback(() => {
    dispatch(toggleFavoritesList(data));
    setIsOpen(false);
    showMessage({ title: '削除に成功しました。', status: 'success' });
  }, [data, dispatch, showMessage]);

  return (
    <GridItem>
      <Flex direction="column" alignItems="center">
        <Box>
          <Box position="relative">
            <Flex
              position="absolute"
              bottom="0"
              right="0"
              bgColor="whiteAlpha.500"
              w={16}
              h={16}
              clipPath="polygon(0 100%, 100% 0, 100% 100%)"
              alignItems="flex-end"
              justifyContent="flex-end"
              p={0}
            >
              <FavoriteButton favoriteFlag={favoriteFlag} toggleHandler={toggleHandler} />
            </Flex>
            <Link as={RouterLink} to={`/movie/${data.id}`}>
              <Image
                w="auto"
                h="auto"
                maxH="270px"
                objectFit="contain"
                src={`${IMAGE_BASE_URL}${data.poster_path}`}
                fallbackSrc="/assets/no-image.jpg"
                alt={data.title}
                borderRadius={8}
                bgColor="gray.100"
              />
            </Link>
          </Box>
        </Box>
        <Box p={2} w="100%">
          <Heading size="s">
            <Link as={RouterLink} to={`/movie/${data.id}`}>
              {data.title}
            </Link>
          </Heading>
          <Text>{formatLocalDate(data.release_date)}</Text>
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
    </GridItem>
  );
});

export default MovieListItem;
