import s from './HomePage.module.css';
import { useEffect, useState  } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPopularFilms } from 'services/GetFilms';

export default function HomePage() {
    const [films, setFilms] = useState([]);
    const location = useLocation();

    useEffect(() => {
        getPopularFilms().then(response => {
            setFilms(films => response.data.results);
        })
            .catch(error => error.message);
    }, []);

    return (
        <>
            <h2 className={s.title}>Trending today</h2>
            <ul className={s.list}>
                {films.map(film => {
                    return <li className={s.item} key={film.id}>
                        <Link to={`/movies/${film.id}`} state={{
                            from: {
                                path: location.pathname,
                            },
                            data: films
                        }} className={s.link}>{film.original_title}</Link>
                    </li>
                })}
            </ul>
        </>
    )
};