import { memo } from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';

const LoadingSpinner: React.VFC = memo(() => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box>
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      </Box>
    </Flex>
  );
});

export default LoadingSpinner;
