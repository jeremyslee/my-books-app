import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      query: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      if (this.state.query) {
        BooksAPI.search(this.state.query)
          .then(result => {
            this.setState({
              results: [].concat(result.error ? [] : result)
            });
          })
          .catch(err => console.log(err));
      } else {
        this.setState({
          results: []
        });
      }
    }
  }

  handleInputChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  handleSelectChange(e) {
    this.props.onShelfChange(e.target);
  }

  render() {
    const { collection } = this.props;
    const { results } = this.state;

    const idBookshelf = {};
    collection.forEach(element => {
      idBookshelf[element.id] = element.shelf;
    });

    const resultsToShow = [];

    if (results.length > 0) {
      results.forEach(book => {
        const title = book.title + (book.subtitle === undefined ? '' : `: ${book.subtitle}`);
        const authors = book.authors ? book.authors.length > 1 ? book.authors.join(', ') : book.authors : '';
        const id = book.id;
        const url = book.imageLinks === undefined ? undefined : book.imageLinks.thumbnail;
        const list = (
          <li key={id}>
            <div className='book'>
              <div className='book-top'>
                <div className='book-cover' style={{ width: 128, height: 192, backgroundImage: `url("${url}")`}}></div>
                <div className='book-shelf-changer'>
                  <select id={id} value={idBookshelf[id] === undefined ? 'none' : idBookshelf[id]}onChange={this.handleSelectChange}>
                    <option disabled>Move to...</option>
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                    <option value='none'>None</option>
                  </select>
                </div>
              </div>
              <div className='book-title'>{title}</div>
              <div className='book-authors'>{authors}</div>
            </div>
          </li>
        );
        resultsToShow.push(list);
      })
    }

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link
            className='back-to-bookshelves'
            to='/'>
            {/* Back to Bookshelves */}
          </Link>
          <div className='search-books-input'>
            <input
              onChange={this.handleInputChange}
              type='text'
              value={this.state.query}
              placeholder='Search by title'/>
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>{resultsToShow}</ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
