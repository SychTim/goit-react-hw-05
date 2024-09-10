import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { getMovieByID } from "../../API.js";
import { Suspense, useEffect, useRef, useState } from "react";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const id = useParams().id;
  const [movie, setMovie] = useState(false);
  const loc = useRef(
    useLocation().state ?? { pathname: "/movies", search: "" }
  );

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await getMovieByID(id);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getMovie();
  }, [id]);

  return (
    <div>
      <Link
        to={loc.current.pathname + loc.current.search}
        className={css.backLink}
      >
        Go back!
      </Link>
      <div className={css.movieBox}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="350"
          height='525'
        />
        <div>
          <h1>{movie.title}</h1>
          <p>User score: {movie.vote_average}</p>
          <h2>Overwiev</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie
              ? movie.genres.map((ganr) => <li key={ganr.id}>{ganr.name}</li>)
              : false}
          </ul>
        </div>
      </div>
      <div className={css.subPage}>
        <p>Additional information</p>
        <Link to="cast" className={css.link}>Cast</Link>
        <Link to="reviews" className={css.link}>Rewievs</Link>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
