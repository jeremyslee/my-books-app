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
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      if (this.state.query) {
        console.log('ran');
        BooksAPI.search(this.state.query)
          .then(result => {
            this.setState({
              results: [].concat(result.length ? result : [])
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

  handleChange(e) {
    this.setState({
      query: e.target.value
    });
  }
  
  render() {
    const { query, results } = this.state;
    const resultsToShow = [];

    if (results.length > 0) {
      results.forEach(book => {
        const title = book.title + book.subtitle ? `: ${book.subtitle}` : '';
        const authors = book.authors.length > 1 ? book.authors.join(', ') : book.author;
        const id = book.id;
        const url = book.imageLinks.thumbnail;
        const list = (
          <li key={id}>
            <div className='book'>
              <div className='book-top'>
                <div className='book-cover' style={{ width: 128, height: 192, backgroundImage: `url("${url}")`}}></div>
                <div className='book-shelf-changer'>
                  <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
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
              onChange={this.handleChange}
              type='text'
              value={this.state.query}
              placeholder='Search by title or author'/>
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='results-grid'>{resultsToShow}</ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
