import s from './Cast.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmCast } from 'services/GetFilms';

export default function Cast() {
    const [cast, setCast] = useState();
    const { filmId } = useParams();
    const filmImageBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const noImage = 'https://raw.githubusercontent.com/Akrisia/goit-react-hw-05-movies/main/src/images/noImage.png';

    useEffect(() => {
        getFilmCast(filmId).then(response => {
            setCast(cast => response.data.cast);
        })
            .catch(error => error.message);
    }, [filmId]);

    return (
        <ul className={s.list}>
            {cast &&
                cast.map(({ id, profile_path, name, character }) => {
                    const image = profile_path === null ? noImage : `${filmImageBaseUrl}/${profile_path}`;
                    return <li className={s.item} key={id}>
                        <img src={image}
                        alt={name} className={s.image}></img>
                        <h4 className={s.title}>{name}</h4>
                        <p className={s.text}>{character}</p>
                    </li>
                })
            }
        </ul>
    );
};
