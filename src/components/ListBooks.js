import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import BooksCategory from './BooksCategory'

export default class ListBooks extends React.Component {
  static propTypes = {
      books: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      shelf: PropTypes.string.isRequired,
      imageLinks: PropTypes.object.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string.isRequired),
      id: PropTypes.string.isRequired,
    })),
    onCategoryChange: PropTypes.func.isRequired
  }

  shelfs = [
    {
      name: `currentlyReading`,
      heading: `Currently Reading`
    },
    {
      name: `wantToRead`,
      heading: `Want to Read`
    },
    {
      name: `read`,
      heading: `Read`
    },
  ]

  render(){
    const shelfs = this.shelfs
    const books = this.props.books

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            { shelfs.map((shelf,index)=> (
              <BooksCategory
                title={shelf.heading}
                key={index}
                books={books.filter((book) => book.shelf === shelf.name)}
                onCategoryChange={(id,shelf)=>{
                  this.props.onCategoryChange(id,shelf)
                }}
              />
            )) }
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

