import React, { Component } from 'react';
import Search from './Search';
import request from 'superagent';
import Results from './results';


class BookSearch extends Component {

    // constructor(props){
    //     super(props);
    //     this.
    // }

    state = {
        books: [],
        searchField: ''
    }

    bookApi = (event) => {
        event.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes?")
            .query({ q: this.state.searchField})
            .then((data) => {
                this.setState({ books: [...data.body.items]})
                console.log(data);
            })
    }

    handleSearch = (event) => {
        console.log(event.target.value);
        this.setState({ searchField: event.target.value })
    }


    render() { 
        return (
            <div>
                <Search bookApiProp={this.bookApi} handleSearchProp={this.handleSearch}/>
                <Results booksProp={this.state.books}/>
            </div>
        );
    }
}
 
export default BookSearch;