import { memo } from 'react';
import { Alert, AlertIcon, Stack } from '@chakra-ui/react';

export type Props = {
  status: 'error' | 'success' | 'warning' | 'info';
  children: string;
};

const StatusMessage: React.VFC<Props> = memo(({ status, children }) => {
  return (
    <Stack>
      <Alert status={status}>
        <AlertIcon />
        {children}
      </Alert>
    </Stack>
  );
});

export default StatusMessage;
