import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByID } from "../../API";

export default function MovieReviews() {
  const id = useParams().id;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function request() {
      try {
        const response = await getReviewsByID(id);
        setReviews([...response.data.results]);
      } catch (error) {
        console.log(error);
      }
    }

    request();
  }, [id]);
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <li key={review.id}>
            {" "}
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <ul key="1">We do not have any reviews for this movie</ul>
      )}
    </ul>
  );
}
