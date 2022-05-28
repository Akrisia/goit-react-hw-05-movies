import PropTypes from 'prop-types';
import s from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPopularFilms } from 'services/GetFilms';

export default function HomePage({handleFilms}) {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getPopularFilms().then(response => {
            setFilms(films => response.data.results);
            })
            .catch(error => error.message)
            .finally(() => setLoading(false));
    }, []);
    
    useEffect(() => {
        handleFilms({ loading });
    }, [loading, handleFilms]);

    return (
        <>
            <h2 className={s.title}>Trending today</h2>
            <ul className={s.list}>
                {films.map(film => {
                    return <li className={s.item} key={film.id}>
                        <Link to={`/movies/${film.id}`} className={s.link}>{film.original_title}</Link>
                    </li>
                })}
            </ul>
        </>
    )
};

HomePage.propTypes = {
    handleFilms: PropTypes.func.isRequired
};