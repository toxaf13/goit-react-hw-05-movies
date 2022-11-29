import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { NavLink } from 'react-router-dom';

export const Layout = () => {
   return (
      <>
         <header>
            <ul>
               <NavLink to='/' end>Home</NavLink>
               <NavLink to='movies'>Movies</NavLink>
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