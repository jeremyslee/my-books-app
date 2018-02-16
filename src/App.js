import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage';
import Bookshelves from './Bookshelves';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const collection = books.map(book => ({
        authors: book.authors,
        averageRating: book.averageRating,
        categories: book.categories,
        description: book.description,
        id: book.id,
        imageLinks: book.imageLinks,
        industryIdentifiers: book.industryIdentifiers,
        pageCount: book.pageCount,
        printType: book.printType,
        publishedDate: book.publishedDate,
        publisher: book.publisher,
        ratingsCount: book.ratingsCount,
        shelf: book.shelf,
        subtitle: book.subtitle,
        title: book.title,
      }));
      this.setState({collection: collection});
    });
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Bookshelves collection={this.state.collection}/>
        )}/>
        <Route exact path='/search' render={() => (
          <SearchPage/>
        )}/>
      </div>
    );
  }
}

export default App;
