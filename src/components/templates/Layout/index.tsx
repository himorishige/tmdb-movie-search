import { Box, Container } from '@chakra-ui/react';
import { Header, Footer } from 'src/components/organisms';

export type Props = {
  children: React.ReactNode;
};

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxW="container.lg" py="2rem" minH="calc(100vh - 55px - 135px)">
        <Box>{children}</Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
