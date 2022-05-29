import s from './Cast.module.css';
import { Link, useParams } from 'react-router-dom';

export default function Cast() {
    const { filmId } = useParams();

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
