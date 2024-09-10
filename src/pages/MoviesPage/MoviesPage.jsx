import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getMovieByName } from "../../API.js";
import MoviesList from "../../components/MovieList/MovieList.jsx";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [moviesList, setMoviesList] = useState([]);
  const [params, setParams] = useSearchParams();
  const loc = useLocation();

  useEffect(() => {
    async function getList(searchRequest) {
      try {
        const response = await getMovieByName(searchRequest);
        setMoviesList([...response.data.results]);
      } catch (error) {
        console.log(error);
      }
    }

    if (params.get("query")) {
      getList(params.get("query"));
    }
  }, [params]);

  function handleSubmit(evt) {
    evt.preventDefault();
    const searchRequest = evt.target.elements.name.value;

    if (searchRequest === "") {
      console.log("searchRequest cant be empty");
      return;
    }

    setParams({ query: searchRequest });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input type="text" name="name" className={css.input} />
        <button className={css.button}>Search</button>
      </form>
      <MoviesList list={moviesList} loc={loc} />
    </div>
  );
}
