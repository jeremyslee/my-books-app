import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Bookshelves extends Component {
  render() {
    const { collection } = this.props;


    return (
      <div>
        {/* <header className="App-header">
          <h1 className="App-title">My Books App</h1>
        </header> */}
        
        <div className='list-books-title'>
          <h1>Book Collection</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Currently Reading</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                </ol>
              </div>
            </div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Want to Read</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                </ol>
              </div>
            </div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Read</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
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
