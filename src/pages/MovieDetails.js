import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const API_KEY = 'faea68839e13ac08bb8ae80f64b50929';

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="text-center">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
        className="img-fluid mb-4"
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>
        <strong>Rating:</strong> {movie.vote_average}
      </p>
    </div>
  );
};

export default MovieDetails;
