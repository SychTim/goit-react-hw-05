import { useParams } from "react-router-dom";
import { getCastByID } from "../../API.js";
import { useEffect, useState } from "react";

export default function MovieCast() {
  const id = useParams().id;
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function request() {
      try {
        const response = await getCastByID(id);
        setCasts([...response.data.cast]);
      } catch (error) {
        console.log(error);
      }
    }

    request();
  }, [id]);

  return (
    <ul>
      {casts.length > 0 ? (
        casts.map((cast) => (
          <li key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.name}
              width="200"
            />{" "}
            <p>{cast.name}</p>
            <p>{cast.character}</p>
          </li>
        ))
      ) : (
        <li key="2">We do not have information about this movie</li>
      )}
    </ul>
  );
}
