import './404.css'
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="not-found-page-container">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/" className="back-to-home-button">Go back to the homepage</Link>
    </div>
  );
}