import { useEffect } from "react";
import { useState } from "react";
import { TrendingItem } from "components/TrendingItem/TrendingItem";
import { Loader } from "components/Loader/Loader";
import { getTrandingApi } from "../../services/getTrandingApi";

const HomePage = () => {
   const [trending, setTrending] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      setIsLoading(true);
      getTrandingApi()
         .then(response => {
            setTrending(response);
         })
         .catch(error => setError(error.message))
         .finally(() => {
            setIsLoading(false);
         });
   }, []);
   return(
      <div>
         {error && <p>Oops, some error:{error}</p>}
         <section>
            <h3>Trending today</h3>
            <ul>
               {trending && <TrendingItem trending={trending}></TrendingItem>}
            </ul>
         </section>
         {isLoading && <Loader></Loader>}
      </div>
   );

};
export default HomePage;