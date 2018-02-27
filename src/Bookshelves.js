import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Bookshelves extends Component {
  render() {
    const { collection, onShelfChange } = this.props;
    const currentlyReading = [];
    const wantToRead = [];
    const read = [];

    collection.forEach(book => {
      let list = (
        <li key={book.id}>
          <div className='book'>
            <div className='book-top'>
              <div className='book-cover' style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ''})` }}></div>
              <div className='book-shelf-changer'>
                <select id={book.id} value={book.shelf} onChange={(e) => onShelfChange(e.target)}>
                  <option value='none' disabled>Move to...</option>
                  <option value='currentlyReading'>Currently Reading</option>
                  <option value='wantToRead'>Want to Read</option>
                  <option value='read'>Read</option>
                  <option value='none'>None</option>
                </select>
              </div>
            </div>
            <div className='book-title'>{book.subtitle ? `${book.title}: ${book.subtitle}` : book.title}</div>
            <div className='book-authors'>{book.authors.join(', ')}</div>
          </div>
        </li>
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
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Currently Reading</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  {currentlyReading}
                </ol>
              </div>
            </div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Want to Read</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  {wantToRead}
                </ol>
              </div>
            </div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Read</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  {read}
                </ol>
              </div>
            </div>
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
