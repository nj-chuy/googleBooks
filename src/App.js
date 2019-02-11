import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookSearch from "./components/bookSearch";
import NavBar from "./components/navBar";
import Results from "./components/results";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <BookSearch />
          <Results />
        </header>
      </div>
    );
  }
}

export default App;
