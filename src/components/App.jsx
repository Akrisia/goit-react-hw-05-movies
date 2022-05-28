import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './Navigation';
import Loader from './Loader';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
import NotFound from './NotFound';


export function App() {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);

  const handleFilms = ({ films, loading }) => {
    setFilms(films);
    setLoading(loading);
  };

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage handleFilms={handleFilms} />}/>
        <Route path='/movies' element={<MoviesPage handleFilms={handleFilms} />}/>
        {/* <MovieDetailsPage /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      {loading && <Loader />}
    </div>
  );
};
