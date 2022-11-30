import { Navigate, Route, Routes } from 'react-router-dom';


//import with lazy
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
const HomePage = lazy(() => import('../pages/Home/Home'));
const MoviesPage = lazy(() => import('../pages/Movies/Movies'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));


export const App = () => {
  return (
   <>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path='*' element={<Navigate to="/" replace />}/>
        </Route>
      </Routes>
 </>
  );
};
