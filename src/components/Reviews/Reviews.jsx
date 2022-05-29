import s from './Reviews.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmReviews } from 'services/GetFilms';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { filmId } = useParams();

    useEffect(() => {
        getFilmReviews(filmId).then(response => {
            setReviews(reviews => response.data.results);
        })
            .catch(error => error.message);
    }, [filmId]);
    
    if (reviews.length === 0) {
        return <h4 className={s.message}>We don't have any reviews for this movie</h4>;
    } else {
        return (
            <ul className={s.list}>
                {reviews.map(({ author, content, id }) => {
                    return <li className={s.item} key={id}>
                        <h4 className={s.title}>Author: {author}</h4>
                        <p className={s.text}>{content}</p>
                    </li>
                })}
            </ul >
        )
    };
};