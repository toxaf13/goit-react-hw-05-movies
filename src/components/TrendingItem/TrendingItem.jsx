import { Link } from "react-router-dom"
import { PropTypes } from "prop-types";
import style from './TrendingItem.module.css'

export const TrendingItem = ({ trending }) => {
   return (
      <>
         {trending.map(movie => (
            <li key = {movie.id} className={style.movie_item}>
               <Link to = {`movies/${movie.id}`}>{movie.title}</Link>
            </li>
         ))}
      </>
   )
}
TrendingItem.propTypes = {
   trending: PropTypes.arrayOf(PropTypes.shape()).isRequired,
 };