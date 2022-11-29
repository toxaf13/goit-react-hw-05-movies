import { Suspense, useEffect } from "react";
import { useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import { AboutFilm } from "components/AboutFilm/AboutFilm";
import { AdditionalInfo } from "components/AdditionalInfo/AdditionalInfo";
import { Loader } from "components/Loader/Loader";
import { getMovieDetailsById } from "services/getMovieDetailsById";

const MovieDetailsPage = () => {
   const [movieDetails, setMovieDetails] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);
   const {movieId} = useParams();
   const location = useLocation();

   useEffect(() => {
      setIsLoading(true);
      getMovieDetailsById(movieId)
         .then(response => {
            setMovieDetails(response);
         })
         .catch(error => setError(error.message))
         .finally(()=> {
            setIsLoading(false);
         });
   }, [movieId]);
   const {poster_path, title, vote_average, overview, genres } = movieDetails;
   const backLinkHref = location.state?.from ?? '/';
   return (
      <>
         <section>
            {location.state ? (
               <Link to={backLinkHref}>Go back </Link>
            ) : (
               <Link to="/">Go back</Link>
            )}
            <div>
               {isLoading && <Loader/>}
               {error && <p>Oops , {error}</p>}
               {movieDetails && (
                  <AboutFilm 
                     poster_path={poster_path}
                     title={title}
                     vote_average={vote_average}
                     overview={overview}
                     genres={genres}
                  />
               )}
            </div>
         </section>
         <section>
            <AdditionalInfo/>
         </section>
         <Suspense>
               <Outlet fallback={null}/>
         </Suspense>
      </>
   )
};
export default MovieDetailsPage;