import React from 'react';

const BookCard = (props) => {
   return (
       <div>
          <img src={props.image} alt="" />
          <div className="desc">
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <h3>{props.description}</h3>
            <h3>{props.link}</h3>
          </div>
        </div>
     );
}
 
export default BookCard;