import imgNotFound from '../../images/imgNotFound.png'

export const CastGallery = ({ credits })=> {
   return (
      <>
         <ul>
            {credits && credits.map(({id, profile_path, name, character}) => {
               return (
                  <li key={id}>
                     <img src={ profile_path === null 
                     ? imgNotFound
                     : `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
                  </li>
               )
            })}
         </ul>
      </>
   );
};