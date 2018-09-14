import React from 'react'
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'
import * as BooksAPI from './../BooksAPI'
import BooksCategory from './BooksCategory'

export default class SearchBooks extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      books: [],
      query: '',
    }
  }
   static propTypes = {
    Books: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      imageLinks: PropTypes.object.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string.isRequired),
      id: PropTypes.string.isRequired
    })),
    onCategoryChange: PropTypes.func.isRequired
  }
  
   mergeBooks = (old,New) => {
    return old.map((item)=>{
      New.forEach((Item)=>{
        if(Item.id === item.id){
          item.category = Item.category
          return
        }
      })
      return item
    })
  }

  updateQuery = (event) => {
    const value = event.target.value.trim()
    this.setState({query: value})
    this.searchBooksData(value)
  }

  searchBooksData = (value) => {
    if (value.length !== 0) {
      BooksAPI.search(value, 10).then((books) => {
        if(books.length>0){
          books = books.filter((book)=>book.imageLinks)
          books = this.mergeBooks(books,this.props.Books)
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

  

  render() {
    const books = this.state.books
    const query = this.state.query
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
        {this.state.query !== '' && books.length > 0 && (<BooksCategory title="Search Results" books={books} onCategoryChange={(id, category) => {
          this.props.onCategoryChange(id, category)
        }}/>)}
      </div>
    )
  }
}

      


