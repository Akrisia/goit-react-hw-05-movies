import s from './MoviesPage.module.css';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { searchFilms } from 'services/GetFilms';

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [films, setFilms] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const handleChange = event => {
        const { value } = event.currentTarget;
        setQuery(value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (!query) {
            return;
        };

        navigate({
            pathname: location.pathname,
            search: `query=${query}`
        });

        searchFilms(query)
            .then(response => {
                setFilms(films => response.data.results);
            })
            .catch(error => error.message)
            .finally(() => {
                setQuery('');
            });
    };

    useEffect(() => {
        location.state !== null && location.state.data && setFilms(films => location.state.data)
    }, [location]);

    return (
        <>
            <form className={s.form} onSubmit={handleSubmit}>
                <input
                    className={s.input}
                    type="text"
                    name="query"
                    value={query}
                    onChange={handleChange}
                    autoComplete="off"
                    autoFocus
                    placeholder=""
            />
            <button type="submit" className={s.button}>
                <span className={s.label}>Search</span>
            </button>
            </form>

            {films && <ul className={s.list}>
                {films.map(film => {
                    return <li className={s.item} key={film.id}>
                        <Link to={`/movies/${film.id}`} state={{
                            from: {
                                path: location.pathname + location.search,
                            },
                            data: films
                        }}
                            className={s.link}>{film.original_title}</Link>
                    </li>
                })}
            </ul>}
        </>
    )
};