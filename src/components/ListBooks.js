import React  from 'react'
import { Link } from 'react-router-dom'
import  PropTypes   from 'prop-types'
import BooksCategory from './BooksCategory'

export default class ListBooks extends React.Component{
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.shape ({
        bookTitle: PropTypes.string.isRequired ,
        bookAuthor: PropTypes.arrayOf(PropTypes.string.isRequired),
        bookId: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        imageURL: PropTypes.object.isRequired,
        })),
        onChange: PropTypes.func.isRequired
    }
   
    categories = [
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
             
                { categories.map((category,index)=> (
              <BooksCategory
                title={category.heading}
                key={index}
                books={books.filter((book) => book.category === category.name)}
                onChange={(id,category)=>{
                  this.props.onChange(id,category)
                }}
              />
             )) }
             
              </div>
              </div>
              <div className='open-search'>
              <Link to='/search'>Add a book</Link>
              </div>
              </div>
        )
       }
       
}


