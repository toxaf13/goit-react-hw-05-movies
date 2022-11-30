import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { NavLink } from 'react-router-dom';
import style from "./Layout.module.css"
export const Layout = () => {
   return (
      <>
         <header>
            <ul className={style.navigation}>
               <NavLink to='/' end className={style.nav_item}>Home</NavLink>
               <NavLink to='movies' className={style.nav_item}>Movies</NavLink>
            </ul>
         </header>
         <main>
            <Suspense fallback={<div>Loading subpage ...</div>}>
               <Outlet/>
            </Suspense>
         </main>
      </>
   );
};