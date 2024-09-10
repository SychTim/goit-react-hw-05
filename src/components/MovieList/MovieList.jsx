import { Link } from "react-router-dom";

export default function MoviesList({list, loc}) {

  return (
    <ul>
      {list.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={loc}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
