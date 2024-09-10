import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="logo"
        width="200"
      />
      <NavLink to="/" className={props => props.isActive && css.active}>Home</NavLink>
      <NavLink to="/movies"className={props => props.isActive && css.active}>Movies</NavLink>
    </nav>
  );
}
