import axios from 'axios';

const config = {
  url: '/trending/movie/week',
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0193b403931965590ec3af04161f2ca2',
  },
};

export const getTrandingApi = async () => {
  const response = await axios(config);
  return response.data.results;
};