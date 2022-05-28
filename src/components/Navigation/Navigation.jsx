import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

const className = ({ isActive }) => (isActive ? s.active : s.link);

export default function Navigation() {
    return (
        <nav className={s.list}>
            <NavLink to='/' end className={className}>Home</NavLink>
            <NavLink to='/movies' className={className}>Movies</NavLink>
        </nav>
    )
};