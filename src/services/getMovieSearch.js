import axios from "axios";

export const getMovieSearch = async params => {
   const config = {
      url: `/search/movie`,
      baseURL: 'https://api.themoviedb.org/3',
      params:{
         api_key: '0193b403931965590ec3af04161f2ca2',
         query: params,
      },
   };
   const response= await axios(config);
   return response.data.results;
};