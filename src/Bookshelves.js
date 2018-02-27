import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import Book from './Book';

class Bookshelves extends Component {
  render() {
    const { collection, onShelfChange } = this.props;
    const currentlyReading = [];
    const wantToRead = [];
    const read = [];

    collection.forEach(book => {
      const title = book.title + (book.subtitle === undefined ? '' : `: ${book.subtitle}`);
      const authors = book.authors ? book.authors.length > 1 ? book.authors.join(', ') : book.authors : '';
      const id = book.id;
      const shelf = book.shelf;
      const url = book.imageLinks === undefined ? 'http://via.placeholder.com/128x192?text=No%20Cover' : book.imageLinks.thumbnail;
      const list = (
        <Book id={id}
              url={url}
              shelf={shelf}
              changeHandler={(e) => onShelfChange(e.target)}
              title={title}
              authors={authors}/>
      );
      if (book.shelf === 'currentlyReading') currentlyReading.push(list);
      if (book.shelf === 'wantToRead') wantToRead.push(list);
      if (book.shelf === 'read') read.push(list);
    });

    return (
      <div>
        <div className='list-books-title'>
          <h1>Book Collection</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <Bookshelf label='Currently Reading' data={currentlyReading}/>
            <Bookshelf label='Want to Read' data={wantToRead}/>
            <Bookshelf label='Read' data={read}/>
          </div>
        </div>

        <Link
          className='open-search'
          to='/search'>
          Search Books
        </Link>
      </div>
    );
  }
}

export default Bookshelves;
