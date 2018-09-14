import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import BooksCategory from './BooksCategory'

export default class ListBooks extends React.Component {
  static propTypes = {
      books: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      imageLinks: PropTypes.object.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string.isRequired),
      id: PropTypes.string.isRequired,
    })),
    onCategoryChange: PropTypes.func.isRequired
  }

  categories = [
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
    const categories = this.categories
    const books = this.props.books

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            { categories.map((category,index)=> (
              <BooksCategory
                title={category.heading}
                key={index}
                books={books.filter((book) => book.category === category.name)}
                onCategoryChange={(id,category)=>{
                  this.props.onCategoryChange(id,category)
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

