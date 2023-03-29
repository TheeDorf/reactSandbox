import React, { Component } from "react";
import JSXVariables from "./components/JSXVariables";
import FilmsList from "./components/FilmsList"


class App extends Component {
  render() {
    return (
      <div>
        <h1>Studio Ghibli Films</h1>
        <FilmsList />
      </div>
    );
  }
}
export default App;
