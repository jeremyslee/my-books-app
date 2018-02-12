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
          <ol className='results-grid'></ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
