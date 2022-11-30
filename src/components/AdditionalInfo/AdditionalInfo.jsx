import { Link, useLocation } from "react-router-dom"
import style from './AdditionalInfo.module.css'
export const AdditionalInfo = () => {
   const location = useLocation();

   return (
      <div className={style.main}>
         <h3> Additional information </h3>
         <ul className={style.list}>
            <li className={style.items}>
               <Link to="cast" state={{from:location.state?.from} ?? '/'}>
                  Cast
               </Link>
            </li>
            <li className={style.items}>
               <Link to="reviews" state={{from:location.state?.from} ?? '/'}>
                  Reviews
               </Link>
            </li>
         </ul>
      </div>

   )
}