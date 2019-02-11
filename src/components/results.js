import React from "react";
import BookCard from "./BookCard";



const Results = (props) => {
      return (
      <div className="list">
        {
            props.booksProp.map((book, i) => {
                return <BookCard 
                        key={i}
                        title={book.title}
                        author={book.author}
                        description={book.volumeInfo.subtitle}
                        image={book.volumeinfo.imagelinks.thumbnail}
                        link={book.previewLink} />
            })
        }
      </div>
    )
}


export default Results;
