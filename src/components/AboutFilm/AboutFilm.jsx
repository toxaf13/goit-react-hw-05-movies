import imgNotFound from '../../images/imgNotFound.png';
import PropTypes from 'prop-types';
import style from './AboutFilm.module.css'
export const AboutFilm = ({
   poster_path,
   title,
   vote_average,
   overview,
   genres,
}) => {
   return (
      <div className={style.block}>
         <img 
            src={
               poster_path ===null 
               ? imgNotFound
               : `https://image.tmdb.org/t/p/w500/${poster_path}`
            }
            alt ={title}
            width='300'
         />
         <div className={style.blockAbout}>
            <h2>{title}</h2>
            <p>
               User Score: {Math.round(vote_average * 10)} %
            </p>
            <h3> Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>{genres?.map(({id, name}) => (
               <li key={id}>{name}</li>
            ))}</ul>
         </div>
      </div>
   )
}
AboutFilm.propTypes = {
   poster_path: PropTypes.string,
   title: PropTypes.string,
   overview: PropTypes.string,
   genres: PropTypes.arrayOf(PropTypes.shape),
};