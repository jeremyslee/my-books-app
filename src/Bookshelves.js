import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Bookshelves extends Component {
  render() {
    return (
      <div>
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
