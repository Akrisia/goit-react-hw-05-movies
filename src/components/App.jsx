import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './Navigation';
import Loader from './Loader';
const HomePage = lazy(() => import('./HomePage'));
const MoviesPage = lazy(() => import('./MoviesPage'));
const MovieDetailsPage = lazy(() => import('./MovieDetailsPage'));
const NotFound = lazy(() => import('./NotFound'));


export function App() {

  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='movies' element={<MoviesPage />}/>
          <Route path='movies/:filmId/*' element={<MovieDetailsPage />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
