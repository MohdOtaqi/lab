import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = 'faea68839e13ac08bb8ae80f64b50929';

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-md-3 mb-4" key={movie.id}>
          <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="img-fluid"
            />
            <h5 className="mt-2">{movie.title}</h5>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Movies;
