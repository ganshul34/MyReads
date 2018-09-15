import React from 'react'
import { PropTypes } from 'prop-types'
import Book from './Book'

export default class BooksCategory extends React.Component {

  static propTypes={
    books: PropTypes.array,
    title: PropTypes.string.isRequired,
    onCategoryChange: PropTypes.func.isRequired
  }

  render(){
    const books = this.props.books
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book,index)=>(
              <Book
                imageURL={book.imageLinks}
                title={book.title}
                author={book.authors}
                key={``.concat(book.id,index)}
                category={book.shelf}
                onCategoryChange={(category)=>{
                this.props.onCategoryChange(book.id,category)
                }}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

