import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleChange = this.handleChange.bind(this);
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
            Back to Bookshelves
          </Link>
          <div className='search-books-input'>
            <input
              onChange={this.handleChange}
              type='text'
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
