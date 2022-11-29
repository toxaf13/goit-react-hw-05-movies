import { useState } from "react";
import PropTypes from 'prop-types';

export const SearchForm = ({ setSearchParams }) => {
   const [movieInput, setMovieInput] = useState('');

   const onInputChange = e => {
      const { value } = e.target;
      setMovieInput(value);
   };

   const onFormSubmit = e =>{
      e.preventDefault();
      setSearchParams (movieInput!==""?{query: movieInput.trim() }:{});
      setMovieInput('');
   };

   return (
      <>
         <form onSubmit={onFormSubmit}>
            <input
               onChange={onInputChange}
               type="text"
               name="searchInput"
               value={movieInput}
               placeholder="Enter movie name"
            ></input>
            <button>Search</button>
         </form>
      </>
   )
}

SearchForm.propTypes = {
   setSearchParams: PropTypes.func.isRequired,
};