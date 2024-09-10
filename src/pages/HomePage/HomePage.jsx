import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTrandingList } from "../../API.js";
import MoviesList from "../../components/MovieList/MovieList.jsx";

export default function HomePage() {
  const [trandList, setTrandList] = useState([]);
  const loc = useLocation();

  useEffect(() => {
    async function ahsb() {
      try {
        const response = await getTrandingList();
        setTrandList([...response.data.results]);
      } catch (error) {
        console.log(error);
      }
    }

    ahsb();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList list={trandList} loc={loc} />
    </div>
  );
}
