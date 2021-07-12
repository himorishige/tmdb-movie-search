import { memo } from 'react';
import { IconButton } from '@chakra-ui/react';
import { MdFavorite } from 'react-icons/md';

export type Props = {
  favoriteFlag: boolean;
  size?: string;
  toggleHandler: () => void;
};

const FavoriteButton: React.VFC<Props> = memo((props) => {
  const { favoriteFlag, toggleHandler, size = '1rem' } = props;

  return (
    <>
      {favoriteFlag ? (
        // お気に入りに登録済みの場合
        <IconButton
          type="button"
          aria-label="add FavoriteList"
          icon={<MdFavorite fontSize={size} />}
          color="red.400"
          _hover={{
            backgroundColor: 'transparent',
            color: { base: 'red.400', md: 'gray.100' },
            transform: 'scale(1.3)',
          }}
          transition="all 0.3s"
          bgColor="transparent"
          onClick={toggleHandler}
          _focus={{ outline: 'none', background: 'none' }}
          _active={{ outline: 'none', background: 'none' }}
          data-testid="remove-favorites-button"
        />
      ) : (
        // お気に入りに未登録の場合
        <IconButton
          type="button"
          aria-label="remove FavoriteList"
          icon={<MdFavorite fontSize={size} />}
          color="gray.100"
          _hover={{
            backgroundColor: 'transparent',
            color: { base: 'gray.100', md: 'red.400' },
            transform: 'scale(1.3)',
          }}
          transition="color 0.3s"
          bgColor="transparent"
          onClick={toggleHandler}
          _focus={{ outline: 'none', background: 'none' }}
          _active={{ outline: 'none', background: 'none' }}
          data-testid="add-favorites-button"
        />
      )}
    </>
  );
});

export default FavoriteButton;
