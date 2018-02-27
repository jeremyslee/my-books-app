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
    this.getCollection = this.getCollection.bind(this);
    this.updateShelf = this.updateShelf.bind(this);
  }

  componentDidMount() {
    this.getCollection();
  }

  getCollection() {
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

  updateShelf(e) {
    const book = e;
    const newShelf = e.value;
    BooksAPI.update(book, newShelf).then(result => {
      console.log(result);
      this.getCollection();
    });
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Bookshelves collection={this.state.collection} onShelfChange={this.updateShelf}/>
        )}/>
        <Route exact path='/search' render={() => (
          <SearchPage collection={this.state.collection} onShelfChange={this.updateShelf}/>
        )}/>
      </div>
    );
  }
}

export default App;
