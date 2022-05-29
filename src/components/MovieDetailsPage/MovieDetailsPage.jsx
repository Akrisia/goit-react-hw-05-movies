import PropTypes from 'prop-types';
import s from './MovieDetailsPage.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { getFilmById } from 'services/GetFilms';
import Cast from '../Cast';

export default function MovieDetailsPage({ handleInfo }) {
    const [loading, setLoading] = useState(false);
    const [film, setFilm] = useState();
    const { filmId } = useParams();
    const filmImageBaseUrl = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        setLoading(true);
        getFilmById(filmId).then(response => {
            setFilm(film => response.data);
            console.log(response.data)
        })
            .catch(error => error.message)
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        handleInfo({ loading });
    }, [loading, handleInfo]);

    return (
        <>
            {film &&
                <div className={s.filmCard}>
                <img src={`${filmImageBaseUrl}${film.poster_path}`} alt={film.original_title} className={s.image} />
                <div className={s.filmInfo}>
                    <h2 className={s.title}>{film.original_title}</h2>
                    <p className={s.text}>User Score: {film.vote_average * 10}%</p>
                    <h3 className={s.subtitle}>Overview</h3>
                    <p className={s.text}>{film.overview}</p>
                    <h3 className={s.subtitle}>Genres</h3>
                    <p className={s.text}>{film.genres.map(({id, name}) => {
                        return <span key={id}>{name} </span>
                    })}</p>
                </div >
                </div>
            }
            <Cast handleInfo={handleInfo} />
        </>
    )
};


MovieDetailsPage.propTypes = {
    handInfo: PropTypes.func
};