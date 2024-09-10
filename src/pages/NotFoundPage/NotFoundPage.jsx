import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>Page not found! 404</p>
      <Link to="/">Back to homepage</Link>
    </div>
  );
}
