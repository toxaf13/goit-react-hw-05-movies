import axios from "axios";

export const getMovieCredits = async movieId => {
   const config = {
      url: `/movie/${movieId}/credits`,
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        api_key: '0193b403931965590ec3af04161f2ca2',
      },
   };
   const response = await axios(config);
   return response.data.cast;
};