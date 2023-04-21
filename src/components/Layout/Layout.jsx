import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Loader, Main, Wrapper } from './Layout.style';
import { AppBar, Footer } from 'components';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <Main>
        <Container>
          <Suspense fallback={<Loader>Loading</Loader>}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
};
