import { memo } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

export type Props = {
  title: string;
  isOpen: boolean;
  cancelRef: React.RefObject<any> | undefined;
  onClose: () => void;
  removeHandler: () => void;
};

const AlertDialogBox: React.VFC<Props> = memo(
  ({ title, isOpen, cancelRef, onClose, removeHandler }) => {
    return (
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              お気に入りリストから削除
            </AlertDialogHeader>

            <AlertDialogBody>
              「{title}」をお気に入りリストから削除してもよいですか？
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                キャンセル
              </Button>
              <Button colorScheme="red" onClick={removeHandler} ml={3}>
                削除
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  },
);

export default AlertDialogBox;
