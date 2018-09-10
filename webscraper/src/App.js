import React, { Component } from 'react';
import './App.css';

//my imports
import Scraper from './Webscraper/scraper';

class App extends Component {
  render() {
    const navbar = (
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="#">Web Scraper</a>
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
