import React, { Component } from 'react';
import SearchPage from './SearchPage';
import Bookshelves from './Bookshelves';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Books App</h1>
        </header>
        <SearchPage />
        <Bookshelves />
      </div>
    );
  }
}

export default App;
