import { Layout } from 'components';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'utils/GlobalStyle';

const HomePage = lazy(() => import('pages/Home/Home'));
const TweetsPage = lazy(() => import('pages/Tweets/Tweets'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
          <Route path="*" element={<h2>No found</h2>} />
        </Route>
      </Routes>
    </>
  );
};
