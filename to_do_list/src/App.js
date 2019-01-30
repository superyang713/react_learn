import React, { Component } from 'react';
import './App.css';
import Joke from './Joke';
import jokesData from "./jokesData.js";

class App extends Component {
  jokeComponents= jokesData.map(joke => <Joke key={joke.id} data={joke} />);
  
  render() {
    return (
      <div className="App">
        {this.jokeComponents}
      </div>
    );
  }
}

export default App;
