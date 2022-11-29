import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const SearchResults = ({ movies }) => {
   const location = useLocation();

   return (
      <>
         <h2>Search results</h2>
         <ul>
            {movies.map(movie=> (
               <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`} state={{ from:location}}>
                     {movie.title}
                  </Link>
               </li>
            ))}
         </ul>
      </>
   )

}
SearchResults.propTypes = {
   movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};