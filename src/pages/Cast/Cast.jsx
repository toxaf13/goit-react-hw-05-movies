import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { getMovieCredits } from "services/getMovieCredits";
import { CastGallery } from "components/CastGallery/CastGallery";

const Cast = () => {
   const [credits, setCredits] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const {movieId} = useParams();
   useEffect(() => {
      setIsLoading(true);
      getMovieCredits(movieId)
         .then(response => {
            setCredits(response);
         })
         .catch(error => setError(error.message))
         .finally(() => {
            setIsLoading(false);
         });
   } , [movieId]);
   return (
      <>
         {isLoading && <Loader/>}
         {error && <p>Oops, some error : {error}</p>}
         <section>
            <CastGallery credits={credits}/>
         </section>
      </>
   )
};
export default Cast;