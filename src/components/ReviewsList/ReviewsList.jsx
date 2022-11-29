import PropTypes from 'prop-types';

export const ReviewsList = ({reviews}) => {
   return (
      <>
         <h2>Reviews</h2>
         <ul>
            {reviews.length === 0 ? (
               <p>Oops! We dont have reviews</p>
            ) : (
               reviews.map(({id, author, content}) => {
                  return (
                     <li key={id}>
                        <p>Author: {author}</p>
                        <p>{content}</p>
                     </li>
                  )
               })
            )}
         </ul>
      </>

   )

}
ReviewsList.propTypes={
   reviews:PropTypes.arrayOf(PropTypes.shape())
 }