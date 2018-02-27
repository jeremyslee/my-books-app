import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Link } from 'react-router-dom';
import Book from './Book';
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
        const url = book.imageLinks === undefined ? 'http://via.placeholder.com/128x192?text=No%20Cover' : book.imageLinks.thumbnail;
        const list = (
          <Book id={id}
                url={url}
                shelf={idBookshelf[id]}
                changeHandler={this.handleSelectChange}
                title={title}
                authors={authors}/>
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
            <DebounceInput
              minLength={1}
              debounceTimeout={300}
              element='input'
              value={this.state.query}
              placeholder='Search by title'
              onChange={this.handleInputChange}/>
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
