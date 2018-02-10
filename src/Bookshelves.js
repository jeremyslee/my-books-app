import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Bookshelves extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">My Books App</h1>
        </header>
        <Link
          className='search-books'
          to='/search'>
          Search Books
        </Link>
      </div>
    );
  }
}

export default Bookshelves;
