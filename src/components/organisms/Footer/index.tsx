import { memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Footer: React.VFC = memo(() => {
  return (
    <Flex alignItems="center" justifyContent="center" p="1rem" bgColor="gray.800">
      <Text color="white">copyright 2021 &copy;someOneElse</Text>
    </Flex>
  );
});

export default Footer;
