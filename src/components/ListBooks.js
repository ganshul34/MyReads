import React  from 'react'
import { Link } from 'react-router-dom'
import { PropTypes }  from 'prop-types'
import BookCategory from './BooksCategory'

export default class BooksCategory extends React.Component{
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.shape ({
        bookTitle: PropTypes.string.isRequired ,
        bookAuthor: PropTypes.arrayOf(PropTypes.string.isRequired),
        bookId: PropTypes.string.isRequired,
        categories: PropTypes.string.isRequired,
        imageURL: PropTypes.object.isRequired,
        })),
        onChange: PropTypes.func.isRequired
    }
   
    bookCategories = [
        {
          name: `wanttoRead`,
          title: `Want To Read`,
        },
        {
          name: `currentlyReading`,
          title: `Currently Reading`,
        },
        {
           name: `read`,
           title: `Read`,
        },
       ]
       render() {
        const categories=this.categories
        const books=this.props.books
        return(
            <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
              {categories.map((category,bookId) => (
               <BookCategory
               title={category.title}
               key={bookId}
               books={books.filter((book) => book.category === category.name)}
               onChange={(bookId,category)=>{
                this.props.onChange(bookId,category)
               }}
             />
              ))}
              </div>
              </div>
              <div className='open-search'>
              <Link to='/search'>Add a book</Link>
              </div>
              </div>
        )
       }
       
}


