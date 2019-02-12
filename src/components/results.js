import React from "react";
import BookCard from "./BookCard";



const Results = (props) => {
      console.log(props)
      return (
      <div className="list">
        {props.booksProp ? (
            props.booksProp.map((book, i) => {
                var info = book.volumeInfo;
                return <BookCard 
                        key={i}
                        title={info.title}
                        author={info.author}
                        description={info.subtitle}
                        image={info.imageLinks.thumbnail}
                        link={info.previewLink} />
            })
        ) : ( 
        <h3>No Results to Display</h3>
        )}
      </div>
    )
}


export default Results;
