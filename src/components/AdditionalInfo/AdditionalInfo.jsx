import { Link, useLocation } from "react-router-dom"

export const AdditionalInfo = () => {
   const location = useLocation();

   return (
      <>
         <h3> Additional information</h3>
         <ul>
            <li>
               <Link to="cast" state={{from:location.state?.from} ?? '/'}>
                  Cast
               </Link>
            </li>
            <li>
               <Link to="reviews" state={{from:location.state?.from} ?? '/'}>
                  Reviews
               </Link>
            </li>
         </ul>
      </>

   )
}