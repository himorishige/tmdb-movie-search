import { useToast } from '@chakra-ui/toast';
import { useCallback } from 'react';

export type Props = {
  title: string;
  status: 'info' | 'warning' | 'success' | 'error';
};

export const useToastMessage = () => {
  const toast = useToast();

  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;

      toast({
        title,
        status,
        position: 'bottom',
        duration: 2000,
        isClosable: true,
      });
    },
    [toast],
  );

  return { showMessage };
};
