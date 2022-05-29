import s from './MovieDetailsPage.module.css';
import { Route, Routes, useParams, Link } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { getFilmById } from 'services/GetFilms';
import Loader from 'components/Loader';
const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

export default function MovieDetailsPage() {
    const [film, setFilm] = useState();
    const { filmId } = useParams();
    const filmImageBaseUrl = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        getFilmById(filmId).then(response => {
            setFilm(film => response.data);
        })
            .catch(error => error.message);
    }, [filmId]);

    return (
        <>
            {film &&
                <>
                    <div className={s.filmCard}>
                        <img src={`${filmImageBaseUrl}${film.poster_path}`} alt={film.original_title} className={s.image} />
                        <div className={s.filmInfo}>
                            <h2 className={s.title}>{film.original_title}</h2>
                            <p className={s.text}>User Score: {film.vote_average * 10}%</p>
                            <h3 className={s.subtitle}>Overview</h3>
                            <p className={s.text}>{film.overview}</p>
                            <h3 className={s.subtitle}>Genres</h3>
                            <p className={s.text}>{film.genres.map(({ id, name }) => {
                                return <span key={id}>{name} </span>
                            })}</p>
                        </div >
                    </div>

                    <div className={s.addInfo}>
                        <h3 className={s.subtitle}>Additional Information</h3>
                        <ul className={s.list}>
                            <li className={s.item}>
                                <Link to={`/movies/${filmId}/cast`} className={s.link}>Cast</Link>
                            </li>
                            <li className={s.item}>
                                <Link to={`/movies/${filmId}/reviews`} className={s.link}>Reviews</Link>
                            </li>
                        </ul>
                    </div>
                </>
            }
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path='cast' element={<Cast />} />
                    <Route path='reviews' element={<Reviews />} />
                </Routes>
            </Suspense>
        </>
    );
};