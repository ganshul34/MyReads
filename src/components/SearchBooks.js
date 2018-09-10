import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import * as BooksAPI from './../BooksAPI'
import BooksCategory from './BooksCategory'

export default class SearchBooks extends React.Component{
  state:{
      books: [],
      query: '',
  }
    static PropTypes ={
        searchbooks: PropTypes.arrayOf(PropTypes.shape ({
        bookTitle: PropTypes.string.isRequired ,
        bookAuthor: PropTypes.arrayOf(Proptypes.string.isRequired),
        bookId: PropTypes.string.isRequired,
        categories: Proptypes.string.isRequired,
        imageURL: PropTypes.object.isRequired,
        })),
        onChange: PropTypes.func.isRequired
    }
      
      mergeBooks = (old,New) => {
    return old.map((oldItem)=>{
      New.forEach((newItem)=>{
        if(newItem.id === oldItem.id){
          oldItem.category = newItem.category
          return
        }
      })
      return oldItem
    })
  }
      
      updateQuery = (event) => {
    const value = event.target.value.trim()
    this.setState({query: value})
    this.searchBooks(value)
  }
      searchBooks = (value) => {
    if (value.length !== 0) {
      BooksAPI.search(value, 10).then((books) => {
        if(books.length>0){
          books = books.filter((book)=>book.imageLinks)
          books = this.mergeBooks(books,this.props.searchbooks)
          this.setState({books})
        }
        else{
          this.setState({books: []})
        }
      })
    } else {
      this.setState({books: [], query: ''})
    }
  }

      render(){
          const books=this.state.books
          const query=this.state.query
          return (
          <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={this.updateQuery}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        {this.state.query !== '' && books.length > 0 && (<BooksCategory title="Search Results" books={books} onChange={(id, category) => {
          this.props.onChange(id, category)
        }}/>)}
      </div>
    )
      }
      
}