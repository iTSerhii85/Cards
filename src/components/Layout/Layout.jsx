import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { Container, Loader, Main, Wrapper } from './Layout.style';
import { AppBar, Footer } from 'components';

import { MyContext } from 'context';

export const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <MyContext.Provider value={{ isActive, setIsActive }}>
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
    </MyContext.Provider>
  );
};
