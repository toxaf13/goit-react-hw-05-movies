import { Loader } from "components/Loader/Loader";
import { ReviewsList } from "components/ReviewsList/ReviewsList";
import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/getMovieReviews";

export const Reviews = () => {
   const [reviews, setMovieReviews] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const {movieId} = useParams();

   useEffect(()=> {
      setIsLoading(true);
      getMovieReviews(movieId)
         .then(response => {
            setMovieReviews(response);
         })
         .catch(error => setError(error.message))
         .finally(() => {
            setIsLoading(false);
         });
   },[movieId]);
   return (
      <>
         {isLoading && <Loader/>}
         {error && <p>Oops, {error}</p>}
         <section>
            <ReviewsList reviews={reviews}/>
         </section>
      </>
   )
}