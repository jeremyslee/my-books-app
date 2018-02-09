import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
  render() {
    return (
      <div>
        <Link
          className='back-to-bookshelves'
          to='/'>
          Back to bookshelves
        </Link>
      </div>
    );
  }
}

export default SearchPage;
