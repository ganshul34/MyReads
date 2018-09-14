import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'

export default class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount(){
    this.getAllBooks()
  }


  getAllBooks = () => {
    BooksAPI.getAll()
        .then((books) => {this.setState({books})})
  }

  changeCategory = (id,category) => {
    BooksAPI.update({id},category).then(()=>{
      this.getAllBooks()
    })
  }

  render() {
    return (
      <div className="app">
          <Route
            exact
            path="/search"
            render={({history}) => (
              <SearchBooks
                Books={this.state.books}
                onCategoryChange={(id,category)=>{
                  this.changeCategory(id,category)
                  history.push('/')
                }}
              />
            )}
          />

          <Route
            exact
            path="/"
            render={()=>(
              <ListBooks
                books={this.state.books}
                onCategoryChange={(id,category)=>{
                  this.changeCategory(id,category)
                }}
              />
            )}
          />
      </div>
    )
  }
}
