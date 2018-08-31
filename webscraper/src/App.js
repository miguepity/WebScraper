import React, { Component } from 'react';
import './App.css';

//my imports
import Scraper from './Webscraper/scraper';

class App extends Component {
  render() {
    const navbar = (
      <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand" href="#">Web Scraper</a>
      </nav>
    );
    return (
      <div className="App">
        {navbar}
        <Scraper></Scraper>
      </div>
    );
  }
}

export default App;
