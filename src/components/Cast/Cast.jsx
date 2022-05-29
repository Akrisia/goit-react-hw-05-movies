import PropTypes from 'prop-types';
import s from './Cast.module.css';
import { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Cast({ handleInfo }) {
    const [loading, setLoading] = useState(false);
    const [film, setFilm] = useState();
    const { filmId } = useParams();

    // useEffect(() => {
    //     setLoading(true);
    //     getFilmById(filmId).then(response => {
    //         setFilm(film => response.data);
    //         console.log(response.data)
    //     })
    //         .catch(error => error.message)
    //         .finally(() => setLoading(false));
    // }, []);

    useEffect(() => {
        handleInfo({ loading });
    }, [loading, handleInfo]);

    return (
        <div className={s.addInfo}>
            <h2 className={s.title}>Additional Information</h2>
            <ul className={s.list}>
                <li className={s.item}>
                    <Link to={`/movies/${filmId}/cast`} className={s.link}>Cast</Link>
                </li>
                <li className={s.item}>
                    <Link to={`/movies/${filmId}/reviews`} className={s.link}>Reviews</Link>
                </li>
            </ul>
        </div>
    )
};

Cast.propTypes = {
    handleInfo: PropTypes.func
};