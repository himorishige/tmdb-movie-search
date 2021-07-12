import { memo } from 'react';
import { Box, Heading, Flex, Icon, Container, Text } from '@chakra-ui/react';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import SearchArea from '../SearchArea';
import { useAppSelector } from 'src/app/hooks';
import { selectFavoritesIds } from 'src/features/user/userSlice';

const Header: React.VFC = memo(() => {
  const favorites = useAppSelector(selectFavoritesIds);

  return (
    <Box pt="1rem" pb="1.5rem" bgGradient="linear(blue.900 0%, blue.700 100%)">
      <Container maxW="container.lg">
        <Flex direction="column" w="100%">
          <Flex alignItems="center" justifyContent="space-between">
            <Heading
              as={Link}
              to="/"
              color="white"
              _hover={{ opacity: '0.8' }}
              transition="opacity 0.3s"
            >
              TMDb Search
            </Heading>
            <Box pt={2}>
              {favorites.length ? (
                <Box position="relative">
                  <Link to="/mypage">
                    <Icon
                      data-testid="heart-icon"
                      as={MdFavorite}
                      w={8}
                      h={8}
                      color="red.400"
                      _hover={{ color: 'red.200' }}
                      transition="0.3s"
                    />
                  </Link>
                  <Flex
                    position="absolute"
                    p="1"
                    color="white"
                    top="-22px"
                    right="-4px"
                    alignItems="center"
                  >
                    <Text data-testid="favorites-count">{favorites.length.toString()}</Text>
                  </Flex>
                </Box>
              ) : (
                <Link to="/mypage">
                  <Icon data-testid="heart-icon" as={MdFavorite} w={8} h={8} color="gray.400" />
                </Link>
              )}
            </Box>
          </Flex>
          <Box pt="1rem">
            <SearchArea />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
});

export default Header;
