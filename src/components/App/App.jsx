import { Layout } from 'components';
import Tweets from 'pages/Tweets/Tweets';
import Home from 'pages/Home/Home';
// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'utils/GlobalStyle';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          {/* <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
          <Route path="*" element={<h2>No found</h2>} />
        </Route>
      </Routes>
    </>
  );
};

// {
/* <div
style={{
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101'
}}
>
React homework template
</div> */
// }
