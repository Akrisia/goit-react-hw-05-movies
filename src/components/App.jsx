import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './Navigation';
import Loader from './Loader';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
import MovieDetailsPage from './MovieDetailsPage';
import NotFound from './NotFound';


export function App() {
  const [loading, setLoading] = useState(false);

  const handleInfo = ({ loading }) => {
    setLoading(loading);
  };

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage handleInfo={handleInfo} />}/>
        <Route path='/movies' element={<MoviesPage handleInfo={handleInfo} />}/>
        <Route path='/movies/:filmId' element={<MovieDetailsPage handleInfo={handleInfo} />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      {loading && <Loader />}
    </div>
  );
};
