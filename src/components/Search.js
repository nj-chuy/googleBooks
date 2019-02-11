import React from 'react';


// access props from bookSearch
const Search = (props) => {
        return ( 
            <div className="search">
             <form onSubmit={props.bookApiProp} action="">
                <input onChange= {props.handleSearchProp} type="text"/>
                {/* onChange will fire to event handler with each input */}
                <button type="submit">Search</button>
             </form>
            </div>
         )
}
 
export default Search;